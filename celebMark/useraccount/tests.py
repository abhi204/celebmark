from django.urls import reverse
from rest_framework.test import APITestCase
from useraccount.models import User
from rest_framework import status

class AccountsTest(APITestCase):
    def setUp(self):
        # We want to go ahead and originally create a user. 
        self.test_user = User.objects.create_user(
            user_name='testuser',
            first_name='test',
            last_name='user',
            mobile=9999999999,
            email='test@example.com',
            password='testpassword'
            )

        # URL for creating an account | getting auth token
        self.create_url = reverse('register-user')
        self.obtain_token_url = reverse('get-auth-token')

    def test_create_user(self):
        """
        Ensure we can create a new user and a valid token is created with it.
        """
        data = {
            'first_name': 'foo',
            'last_name': 'Sbar',
            'user_name': 'foobar',
            'mobile': '7080808080',
            'email': 'foobar@example.com',
            'password': 'somepassword'
        }

        response = self.client.post(self.create_url , data, format='json')
        user = User.objects.get(user_name='foobar')
        # We want to make sure we have two users in the database..
        self.assertEqual(User.objects.count(), 2)
        # And that we're returning a 201 created code.
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        # Additionally, we want to return the user_name and email upon successful creation.
        self.assertEqual(response.data['user_name'], data['user_name'])
        self.assertEqual(response.data['email'], data['email'])

    def test_create_user_with_no_password(self):
        data = {
            'first_name': 'foo',
            'last_name': 'bar',
            'user_name': 'foobar',
            'mobile': '9895',
            'email': 'foobarz@example.com',
            'password': ''
        }

        response = self.client.post(self.create_url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertEqual(User.objects.count(), 1)
        self.assertEqual(len(response.data['password']), 1)

    def test_create_user_with_too_long_user_name(self):
        data = {
            'first_name': 'foo',
            'last_name': 'bar',
            'user_name': 'foobar'*300,
            'mobile': '9895',
            'email': 'foobarz@example.com',
            'password': 'blablablackshit'
        }

        response = self.client.post(self.create_url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertEqual(User.objects.count(), 1)
        self.assertEqual(len(response.data['user_name']), 1)

    def test_create_user_with_no_user_name(self):
        data = {
            'first_name': 'foo',
            'last_name': 'bar',
            'user_name': '',
            'mobile': '9895',
            'email': 'foobarz@example.com',
            'password': 'usearpfeoruh'
        }

        response = self.client.post(self.create_url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertEqual(User.objects.count(), 1)
        self.assertEqual(len(response.data['user_name']), 1)

    def test_create_user_with_preexisting_user_name(self):
        data = {
            'user_name': 'testuser',
            'first_name': 'test',
            'last_name': 'user',
            'mobile': '9999999999',
            'email': 'test@example.com',
            'password': 'testpassword'
            }

        response = self.client.post(self.create_url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertEqual(User.objects.count(), 1)
        self.assertEqual(len(response.data['user_name']), 1)

    def test_get_auth_token_for_existing_user(self):
        user_name = 'testuser'
        password = 'testpassword'
        data = {
            'user_name': user_name,
            'password': password
        }
        response = self.client.post(self.obtain_token_url, data, format='json')
        self.assertEqual(response.status_code,status.HTTP_200_OK)

    def test_get_auth_token_for_wrong_user(self):
        user_name = 'wronguser'
        password = 'wrongpassword'
        data = {
            'user_name': user_name,
            'password': password
        }
        response = self.client.post(self.obtain_token_url, data, format='json')
        self.assertEqual(response.status_code,status.HTTP_400_BAD_REQUEST)