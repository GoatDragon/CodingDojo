# Generated by Django 2.2.5 on 2019-09-19 15:50

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('friend', models.ManyToManyField(related_name='_user_friend_+', to='many_to_many_self_joins.User')),
            ],
        ),
    ]
