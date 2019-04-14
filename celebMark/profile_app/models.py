from django.db import models
from useraccount.models import Celeb

def gallery_image_upload(instance, filename):
    return f'users/{instance.celeb.user_name}/gallery/{filename}'

# Create your models here.
class Gallery(models.Model):
    image = models.ImageField(upload_to=gallery_image_upload)
    celeb = models.ForeignKey(Celeb, on_delete=models.CASCADE)
    
    @property
    def image_url(self):
        return self.image.url