from django.test import TestCase
from .models import User, Team, Activity, Leaderboard, Workout

class UserModelTest(TestCase):
    def test_create_user(self):
        user = User.objects.create(name="Test User", email="test@example.com", team="Test Team")
        self.assertEqual(user.name, "Test User")
        self.assertEqual(user.email, "test@example.com")
        self.assertEqual(user.team, "Test Team")

class TeamModelTest(TestCase):
    def test_create_team(self):
        team = Team.objects.create(name="Test Team", description="A test team.")
        self.assertEqual(team.name, "Test Team")
        self.assertEqual(team.description, "A test team.")

class ActivityModelTest(TestCase):
    def test_create_activity(self):
        user = User.objects.create(name="Test User", email="test2@example.com", team="Test Team")
        activity = Activity.objects.create(user=user, type="Running", duration=30, date="2024-01-01")
        self.assertEqual(activity.type, "Running")
        self.assertEqual(activity.duration, 30)
        self.assertEqual(str(activity.date), "2024-01-01")

class LeaderboardModelTest(TestCase):
    def test_create_leaderboard(self):
        user = User.objects.create(name="Test User", email="test3@example.com", team="Test Team")
        leaderboard = Leaderboard.objects.create(user=user, points=100, rank=1)
        self.assertEqual(leaderboard.points, 100)
        self.assertEqual(leaderboard.rank, 1)

class WorkoutModelTest(TestCase):
    def test_create_workout(self):
        workout = Workout.objects.create(name="Pushups", description="Do pushups", suggested_for="Strength")
        self.assertEqual(workout.name, "Pushups")
        self.assertEqual(workout.suggested_for, "Strength")
