from rest_framework import generics, permissions
from django.urls import reverse_lazy
from .serializers import HistorySerializer
from rest_framework.permissions import IsAuthenticated, IsAuthenticatedOrReadOnly, BasePermission, IsAdminUser, DjangoModelPermissions
from rest_framework import viewsets
from django.shortcuts import get_object_or_404
from history.models import History
from rest_framework.views import APIView
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework import status


class HistoryCreate(APIView):
    permission_classes = [AllowAny]

    def post(self, request, format='json'):
        serializer = HistorySerializer(data=request.data)
        if serializer.is_valid():
            item = serializer.save()
            if item:
                json = serializer.data
                return Response(json, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class HistoryUserWritePermission(BasePermission):
    message = 'Editing posts is restricted to the author only.'

    def has_object_permission(self, request, view, obj):
        return obj.owner == request.user


class HistoryDetail(APIView, HistoryUserWritePermission):
    permission_classes = [HistoryUserWritePermission]
    queryset = History.objects.all()
    serializer_class = HistorySerializer


# class HistoryList(viewsets.ModelViewSet):
#     permission_classes = [IsAuthenticated]
#     serializer_class = HistorySerializer
#     queryset = History.objects.all()

class HistoryList(APIView, HistoryUserWritePermission):
    permission_classes = [AllowAny]
    serializer_class = HistorySerializer

    def get_object(self, queryset=None, **kwargs):
        item = self.kwargs.get('pk')
        return get_object_or_404(History, slug=item)

    def get(self, request, *args, **kwargs):
        user = self.request.user
        items = History.objects.filter(user=user)
        serializer = HistorySerializer(items, many=True)
        return Response(serializer.data)

    # Define Custom Queryset
    def get_queryset(self):
        return History.objects.all()
