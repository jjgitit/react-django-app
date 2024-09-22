from django.contrib.auth.models import User
from django.shortcuts import render
from rest_framework import generics
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import Note
from .serializers import NoteSerializer, UserSerializer


class NoteListCreate(generics.ListCreateAPIView):
    """list all notes or create new note"""

    serializer_class = NoteSerializer
    # only allows authenticated user which is the author
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        """return notes written by you"""
        return Note.objects

    def perform_create(self, serializer):
        if serializer.is_valid():
            serializer.save(author=self.request.user)
        else:
            print(serializer.errors)


class NoteDelete(generics.DestroyAPIView):
    """deletes notes written by you"""

    serializer_class = NoteSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        """show notes you created"""
        return Note.objects.filter(author=self.request.user)


class CreateUserView(generics.CreateAPIView):
    """when creating a new user"""

    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]


class CurrentUserView(APIView):
    """to get the current user so that delete button shows for posts user wrote"""

    permission_classes = [IsAuthenticated]
    serializer_class = UserSerializer

    def get(self, request):
        """return current user's id and username"""
        user = request.user
        return Response({"id": user.id, "username": user.username})
