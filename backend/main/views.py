from .serializers import ImageSerializer
from rest_framework import viewsets
from .models import Image


class ImageView(viewsets.ModelViewSet):
    serializer_class = ImageSerializer
    queryset = Image.objects.all()
