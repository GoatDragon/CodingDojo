# Generated by Django 2.2.5 on 2019-09-17 20:40

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('loginreg', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='user',
            old_name='name',
            new_name='username',
        ),
    ]