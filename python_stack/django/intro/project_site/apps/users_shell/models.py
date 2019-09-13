from django.db import models

class Users(models.Model):
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    email = models.CharField(max_length=255)
    age = models.IntegerField()

    def __repr__(self):
        return f"{self.first_name} {self.last_name}, email: {self.email}, age: {self.age}"


