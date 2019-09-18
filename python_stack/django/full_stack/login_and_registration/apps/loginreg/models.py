from django.db import models
import datetime
import bcrypt
import re


class UserManager(models.Manager):
    def validate(self, postData):
        errors = {}
        try:
            today_fdate = datetime.datetime.strptime(datetime.date.today().strftime("%Y-%d-%m"), "%Y-%d-%m")
            birthday_fdate = datetime.datetime.strptime(postData['birthday'], "%Y-%m-%d")
            thirteen_fdate = datetime.datetime.now() - datetime.timedelta(days=13 * 365.25)
            if birthday_fdate > today_fdate:
                errors['date_future'] = "birthday must be in the past"
            if birthday_fdate > thirteen_fdate:
                errors['date_young'] = "you must be over 13 years old to register"
        except ValueError:
            errors["date_none"] = "please enter a birthday"
        EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
        if not EMAIL_REGEX.match(postData['email']):
            errors['email_invalid'] = "email is invalid"
        if len(User.objects.filter(email=postData['email'])) > 0:
            errors['email_unique'] = "email is not unique"
        if len(User.objects.filter(username=postData['username'])) > 0:
            errors['username_unique'] = "username is not unique"
        if len(postData['username']) < 2:
            errors['username_length'] = "username must be at least 2 characters"
        if not postData['username'].isalpha():
            errors['username_alpha'] = "username can only contain letters"
        if not postData['password'] == postData['confirm_password']:
            errors['password_match'] = "passwords do not match"
        if len(postData['password']) < 8:
            errors['passsword_length'] = "password must be at least 8 characters"
        return errors

    def add_user(self, postData):
        User.objects.create(
            username=postData['username'],
            email=postData['email'],
            birthday=postData['birthday'],
            pw_hash=bcrypt.hashpw(postData['password'].encode(), bcrypt.gensalt()).decode()
        )
        print(postData['birthday'])

    def login_valid(self, postData):
        user = User.objects.filter(username=postData['username'])
        if user:
            logged_user = user[0]
            return bcrypt.checkpw(postData['password'].encode(), logged_user.pw_hash.encode())


class User(models.Model):
    username = models.CharField(max_length=255)
    email = models.CharField(max_length=255)
    birthday = models.DateField()
    pw_hash = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects = UserManager()
