# Generated by Django 2.2.5 on 2019-09-18 21:39

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('wall', '0002_auto_20190918_2101'),
    ]

    operations = [
        migrations.RenameField(
            model_name='comment',
            old_name='message_id',
            new_name='message',
        ),
        migrations.RenameField(
            model_name='comment',
            old_name='user_id',
            new_name='user',
        ),
        migrations.RenameField(
            model_name='message',
            old_name='user_id',
            new_name='user',
        ),
    ]