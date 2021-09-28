from django.db import models
from imagekit.models import ProcessedImageField
from imagekit.processors import Adjust, ResizeToFit, Transpose


class Image(models.Model):
    title = models.CharField(max_length=200)
    image = ProcessedImageField(upload_to='',
                                processors=[ResizeToFit(300, 300), Adjust(color=0), Transpose(True)],
                                format='PNG',
                                options={'quality': 60})

    def __str__(self):
        return self.title
