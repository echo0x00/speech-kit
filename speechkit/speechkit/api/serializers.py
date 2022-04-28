from rest_framework import serializers
from django.contrib.auth import get_user_model

from rest_framework import serializers
from history.models import History

class HistorySerializer(serializers.ModelSerializer):
    user = serializers.ReadOnlyField(source='user.email')
    speaker = serializers.ReadOnlyField(source='speaker.title')
    sum = 1
    class Meta:
        model = History
        fields = ('id', 'user', 'speaker', 'text', 'process_at', 'sum')

    def create(self, validated_data):
        instance = self.Meta.model()
        instance.save()
        return instance


class UserRegisterSerializer(serializers.ModelSerializer):

    email = serializers.EmailField(required=True)
    username = serializers.CharField(required=True)
    password = serializers.CharField(min_length=8, write_only=True)

    class Meta:
        model = get_user_model()
        fields = ('email')
        extra_kwargs = {'password': {'write_only': True}}
