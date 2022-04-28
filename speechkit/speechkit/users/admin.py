from django.contrib import admin
from .models import CommonUser


@admin.register(CommonUser)
class CommonUserAdmin(admin.ModelAdmin):
    model = CommonUser
    list_display = ('email', 'balance', 'is_active', 'is_staff', 'is_superuser')
    list_display_links = ('email', 'balance')
