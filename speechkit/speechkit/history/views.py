# from rest_framework_simplejwt.views import TokenObtainPairView
# from rest_framework import status
# from rest_framework.response import Response
# from rest_framework.views import APIView
# from s import
# from rest_framework_simplejwt.tokens import RefreshToken
# from rest_framework.permissions import AllowAny
#
# class HistoryCreate(APIView):
#     permission_classes = [AllowAny]
#
#     def post(self, request, format='json'):
#         serializer = HistorySerializer(data=request.data)
#         if serializer.is_valid():
#             item = serializer.save()
#             if item:
#                 json = serializer.data
#                 return Response(json, status=status.HTTP_201_CREATED)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
#
# # class HistoryList(viewsets.ModelViewSet):
# #     permission_classes = [IsAuthenticated]
# #     serializer_class = HisorySerializer
# #
# #     def get_object(self, queryset=None, **kwargs):
# #         item = self.kwargs.get('pk')
# #         return get_object_or_404(History, slug=item)
# #
# #     # Define Custom Queryset
# #     def get_queryset(self):
# #         return History.objects.all()
