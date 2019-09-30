from django.db import models


class User(models.Model):
    name = models.CharField(max_length=255)
    friend = models.ManyToManyField('self')
