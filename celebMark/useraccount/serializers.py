from rest_framework import serializers
from rest_framework.validators import UniqueValidator
from useraccount.models import User
from rest_framework.authtoken.models import Token

class UserSerializer(serializers.ModelSerializer):
    user_name = serializers.CharField(
            max_length=50,
            required=True,
            validators = [UniqueValidator(queryset=User.objects.all())]
    )
    email = serializers.EmailField(
            required=True,
            validators = [UniqueValidator(queryset=User.objects.all())]
    )
    password = serializers.CharField(min_length=8)
    token = serializers.SerializerMethodField()

    def get_token(self, obj):
        token, created = Token.objects.get_or_create(user=obj)
        return token.key

    class Meta:
        model = User
        fields = ('first_name', 'last_name', 'user_name','mobile','email', 'password','token')
        write_only_fields = ('password',)
        read_only_fields = ('user_name',)

    def create(self, validated_data):
        user = User.objects.create(
            first_name=validated_data['first_name'],
            last_name=validated_data['last_name'],
            user_name=validated_data['user_name'],
            mobile=validated_data['mobile'],
            email=validated_data['email'],
        )

        user.set_password(validated_data['password'])
        user.save()

        return user