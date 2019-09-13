from django.db import models


class Hogwarts(models.Model):
    name = models.CharField(max_length=45)
    house = models.CharField(max_length=45)
    pet = models.CharField(max_length=45)
    year = models.IntegerField()

    def __repr__(self):
        return f"{self.name} {self.house} {self.pet} {self.year}"
