from django.db import models


class History(models.Model):
    class Meta:
        ordering = ['process_at']

    user = models.ForeignKey('users.CommonUser', on_delete=models.DO_NOTHING)
    speaker = models.ForeignKey('speaker.Speaker', on_delete=models.DO_NOTHING)
    text = models.TextField(null=False, default='', blank=True)
    process_at = models.DateTimeField(auto_now_add=True)
    sum = models.DecimalField(max_digits=7, decimal_places=2, null=True)

    def __str__(self):
        return f"Озвучено {self.process_at.date()} на сумму {self.sum} руб."