from django.db import models
from apps.loginreg.models import User


class MessageManager(models.Manager):
    def post_message(self, message, user_id):
        Message.objects.create(
            user=User.objects.get(id=user_id),
            message=message
        )


class CommentManager(models.Manager):
    def post_comment(self, comment, user_id, message_id):
        Comment.objects.create(
            message=Message.objects.get(id=message_id),
            user=User.objects.get(id=user_id),
            comment=comment
        )


class Message(models.Model):
    user = models.ForeignKey(User, related_name="messages", on_delete=models.PROTECT)
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects = MessageManager()


class Comment(models.Model):
    message = models.ForeignKey(Message, related_name="comments", on_delete=models.PROTECT)
    user = models.ForeignKey(User, related_name="comments", on_delete=models.PROTECT)
    comment = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects = CommentManager()
