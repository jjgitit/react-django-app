from django.urls import path

from . import views

urlpatterns = [
    path("notes/", views.NoteListCreate.as_view(), name="note-list"),
    path("notes/delete/<int:pk>/", views.NoteDelete.as_view(), name="delete-note"),
    path("notes/update/<int:pk>", views.UserUpdateNote.as_view(), name="update-note"),
    path("current_user/", views.CurrentUserView.as_view(), name="current-user"),
    path("notes/<str:username>/", views.UserNoteList.as_view(), name="user-note"),
]
