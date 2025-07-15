import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  BookOpen, 
  Brain, 
  Trophy, 
  Clock, 
  TrendingUp, 
  Heart,
  Play,
  CheckCircle
} from "lucide-react";

interface LearningDashboardProps {
  selectedEmotion: string;
}

const emotionContent = {
  calm: {
    title: "Mindful Learning",
    description: "Perfect time for deep focus and reflection",
    recommendedActivities: ["Reading comprehension", "Writing exercises", "Meditation basics"],
    bgGradient: "bg-gradient-calm",
    accent: "emotion-calm"
  },
  energetic: {
    title: "Active Learning",
    description: "Channel that energy into interactive learning",
    recommendedActivities: ["Interactive quizzes", "Video lessons", "Practice exercises"],
    bgGradient: "bg-gradient-energy",
    accent: "emotion-energetic"
  },
  focused: {
    title: "Deep Focus Mode",
    description: "Tackle challenging concepts with concentration",
    recommendedActivities: ["Complex problem solving", "Research projects", "Skill building"],
    bgGradient: "bg-gradient-focus",
    accent: "emotion-focused"
  },
  stressed: {
    title: "Gentle Learning",
    description: "Let's take it easy and build confidence",
    recommendedActivities: ["Review familiar topics", "Short exercises", "Breathing techniques"],
    bgGradient: "bg-gradient-calm",
    accent: "emotion-stressed"
  },
  confident: {
    title: "Challenge Mode",
    description: "Ready to push your boundaries",
    recommendedActivities: ["Advanced topics", "Test preparation", "New skill challenges"],
    bgGradient: "bg-gradient-primary",
    accent: "emotion-confident"
  }
};

export function LearningDashboard({ selectedEmotion }: LearningDashboardProps) {
  const content = emotionContent[selectedEmotion as keyof typeof emotionContent] || emotionContent.calm;

  return (
    <div className="space-y-6">
      {/* Hero Section */}
      <Card className={`${content.bgGradient} border-0 text-foreground shadow-soft`}>
        <CardHeader className="pb-4">
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-2xl mb-2">{content.title}</CardTitle>
              <p className="text-lg opacity-90">{content.description}</p>
            </div>
            <div className="animate-breathe">
              <Heart className="w-8 h-8 text-primary" />
            </div>
          </div>
        </CardHeader>
      </Card>

      {/* Progress Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="border-0 shadow-soft">
          <CardContent className="p-4">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Learning Streak</p>
                <p className="text-xl font-bold text-foreground">7 days</p>
              </div>
            </div>
            <Progress value={70} className="h-2" />
          </CardContent>
        </Card>

        <Card className="border-0 shadow-soft">
          <CardContent className="p-4">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-success/10 rounded-full flex items-center justify-center">
                <Trophy className="w-5 h-5 text-success" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Completed Today</p>
                <p className="text-xl font-bold text-foreground">3 of 5</p>
              </div>
            </div>
            <Progress value={60} className="h-2" />
          </CardContent>
        </Card>

        <Card className="border-0 shadow-soft">
          <CardContent className="p-4">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                <Clock className="w-5 h-5 text-accent" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Study Time</p>
                <p className="text-xl font-bold text-foreground">2.5 hrs</p>
              </div>
            </div>
            <Progress value={83} className="h-2" />
          </CardContent>
        </Card>
      </div>

      {/* Recommended Activities */}
      <Card className="border-0 shadow-soft">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Brain className="w-5 h-5 text-primary" />
            Recommended for Your Current Mood
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {content.recommendedActivities.map((activity, index) => (
              <Card key={index} className="border border-border/50 hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                        <BookOpen className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground">{activity}</h4>
                        <p className="text-sm text-muted-foreground">15-30 min</p>
                      </div>
                    </div>
                    <Badge variant="secondary" className="text-xs">New</Badge>
                  </div>
                  <Button 
                    className="w-full" 
                    size="sm"
                    variant={index === 0 ? "default" : "outline"}
                  >
                    <Play className="w-4 h-4 mr-2" />
                    Start Learning
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Recent Achievements */}
      <Card className="border-0 shadow-soft">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Trophy className="w-5 h-5 text-success" />
            Recent Achievements
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center gap-3 p-3 bg-success/5 rounded-lg">
              <CheckCircle className="w-5 h-5 text-success" />
              <div>
                <p className="font-medium text-foreground">Completed Math Fundamentals</p>
                <p className="text-sm text-muted-foreground">Yesterday • +50 XP</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-primary/5 rounded-lg">
              <CheckCircle className="w-5 h-5 text-primary" />
              <div>
                <p className="font-medium text-foreground">7-Day Learning Streak</p>
                <p className="text-sm text-muted-foreground">Today • +100 XP</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}