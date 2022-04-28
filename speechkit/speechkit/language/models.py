from django.db import models
from easy_thumbnails.fields import ThumbnailerImageField


class Language(models.Model):
    title = models.CharField(max_length=120, null=False, unique=True)
    short_title = models.CharField(max_length=5, null=False, unique=True)
    flag = ThumbnailerImageField(default='images/language/flag.png',
                                   upload_to='images/language/flags/')

    def __str__(self):
        return f"{self.title} ({self.short_title})"
