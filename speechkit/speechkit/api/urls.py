from django.urls import path, include

from rest_framework.urlpatterns import format_suffix_patterns
from . import views

urlpatterns = [
    # path('users/', views.UserList.as_view()),
    # path('users/<int:pk>/', views.UserDetail.as_view()),
    path('history/', views.HistoryList.as_view(), name='history-list-api'),
    path('history/create/', views.HistoryCreate.as_view(), name='history-create-api'),
    path('history/<int:pk>/', views.HistoryDetail, name='history-detail-api'),
]

urlpatterns = format_suffix_patterns(urlpatterns)