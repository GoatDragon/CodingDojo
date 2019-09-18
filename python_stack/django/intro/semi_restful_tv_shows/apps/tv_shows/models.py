from django.db import modelstry:
            today_fdate = datetime.datetime.strptime(datetime.date.today().strftime("%Y-%d-%m"), "%Y-%d-%m")
            birthday_fdate = datetime.datetime.strptime(postData['birthday'], "%Y-%m-%d")
            thirteen_fdate = datetime.datetime.now() - datetime.timedelta(days=13 * 365.25)
            if birthday_fdate > today_fdate:
                errors['date_future'] = "birthday must be in the past"
            if birthday_fdate > thirteen_fdate:
                errors['date_young'] = "you must be over 13 years old to register"
        except ValueError:
            errors["date_none"] = "please enter a birthday"
from datetime import date
from time import strptime


class ShowManager(models.Manager):
    def validator(self, post_data):
        errors = {}
        if len(post_data['title']) < 2:
            errors['title'] = "title must be at least 2 characters"
        if len(post_data['network']) < 3:
            errors['network'] = "network must be at least 3 characters"
        if len(post_data['description']) > 0 and len(post_data['description']) < 10:
            errors['description'] = "if there is a description, it must be at least 10 characters"
        if strptime(post_data['release_date'], "%Y-%m-%d") > strptime(str(date.today()), "%Y-%m-%d"):
            errors['release_date'] = "date must be in the past"
        if len(Show.objects.filter(title=post_data['title'])) > 0:
            errors['unique_title'] = "show already in database"
        return errors


class Show(models.Model):
    title = models.CharField(max_length=255)
    network = models.CharField(max_length=255)
    release_date = models.DateField()
    description = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects = ShowManager()
