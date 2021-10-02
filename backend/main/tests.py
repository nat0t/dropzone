from mixer.backend.django import mixer
from rest_framework import status
from rest_framework.test import APITestCase

from .models import Image


class TestImageView(APITestCase):
    def test_get_list(self):
        mixer.blend(Image)
        response = self.client.get(f'/api/images/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_get_image(self):
        image = mixer.blend(Image)
        response = self.client.get(f'/api/images/{image.id}/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_upload_image(self):
        image = mixer.blend(Image)
        Image.objects.all().delete()
        response = self.client.post(f'/api/images/', {'title': image.title, 'image': image.image})
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
