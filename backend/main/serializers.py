import logging
import filetype
from rest_framework import serializers
from .models import Image

logger = logging.getLogger(__name__)


class ImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Image
        fields = ('id', 'title', 'image')

    def is_valid(self, raise_exception=False):
        ret = super(ImageSerializer, self).is_valid(False)
        if self.errors:
            logger.error(f'Serialization failed due to {self.errors}')
            if raise_exception:
                raise serializers.ValidationError(self.errors)
        return ret

    def validate_image(self, value):
        if not filetype.is_image(value):
            logger.error(f'The submitted data {value} was not an image or was corrupted.')
            raise (serializers.ValidationError(f'The submitted data {value} was not an image or was corrupted.'))
        logger.info(f'Image {value} was successfully added.')
        return value
