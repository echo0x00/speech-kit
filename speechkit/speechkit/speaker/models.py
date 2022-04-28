from django.db import models

class Speaker(models.Model):
    MAN = 'M'
    WOMAN = 'W'

    GENDERS = [
        (MAN, 'мужской'),
        (WOMAN, 'женский')
    ]

    title = models.CharField(max_length=120, null=False, unique=True)
    model_name = models.CharField(max_length=120, null=False, unique=True)
    language = models.ForeignKey("language.Language", on_delete=models.DO_NOTHING)
    gender = models.CharField(choices=GENDERS, default=MAN, max_length=12)

    def __str__(self):
        return f"Текст читает {self.title} ({self.language})"

