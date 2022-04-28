import datetime

from django.contrib.auth.models import AbstractUser
from django.db import models
from .managers import CommonUserManager


class CommonUser(AbstractUser):
    username = None
    first_name = None
    last_name = None
    email = models.EmailField(
        'E-mail', unique=True, blank=False, null=False)
    balance = models.DecimalField(decimal_places=2, max_digits=7, default=0)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []
    objects = CommonUserManager()

    def __str__(self):
        return self.email

    # @property
    # def token(self):
    #     return self._generate_jwt_token()
    #
    # def _generate_jwt_token(self):
    #     dt = datetime.now() + datetime.timedelta(days=1)
    #
    #     token = jwt.encode({
    #         'id': self.pk,
    #         'exp': int(dt.strftime('%s'))
    #     }, settings.SECRET_KEY, algorithm='HS256')
    #
    #     return token.decode('utf-8')