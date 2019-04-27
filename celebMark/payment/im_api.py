from django.conf import settings
from instamojo_wrapper import Instamojo

# import and use this api
im_api = Instamojo(api_key=settings.IM_API_KEY, auth_token=settings.IM_AUTH_TOKEN)

if settings.DEBUG:
    im_api.endpoint = im_api.endpoint.replace('www.', 'test.')
