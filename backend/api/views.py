from django.contrib.auth.models import User
from django.shortcuts import render
from rest_framework import generics
from rest_framework.permissions import AllowAny, IsAuthenticated

from .models import Note
from .serializers import NoteSerializer, UserSerializer


class NoteListCreate(generics.ListCreateAPIView):
    """list all notes or create new note"""

    serializer_class = NoteSerializer
    # only allows authenticated user which is the author
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        """return notes written by you"""
        user = self.request.user
        return Note.objects.filter(author=user)

    def perform_create(self, serializer):
        if serializer.is_valid():
            serializer.save(author=self.request.user)
        else:
            print(serializer.errors)


class NoteDelete(generics.DestroyAPIView):
    """deletes notes written by you"""

    def get_queryset(self):
        """show notes you created"""
        user = self.request.user
        return Note.objects.filter(author=user)


class CreateUserView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]
