from unittest.util import _MAX_LENGTH
from django.db import models
from django.contrib.auth.models import AbstractUser
from ckeditor.fields import RichTextField

# Create your models here.
class User(AbstractUser):

    def _str_(self):
        return self.username

class Aktualnosci(models.Model):
    poster = models.ForeignKey(User, models.SET_NULL, null=True, related_name="poster")
    title = models.CharField(max_length=64, )
    title_image = models.ImageField(null=True, blank=True, upload_to="images/")
    content = RichTextField(blank=True, null=True)
    content_preview = RichTextField(blank=True, null=True)
    date = models.DateTimeField(auto_now_add=True)
    archived = models.BooleanField(default=False)

    def _str_(self):
        return self.title