import { useState } from "react";
import { EmotionSelector } from "@/components/EmotionSelector";
import { LearningDashboard } from "@/components/LearningDashboard";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heart, Brain, TrendingUp, Users } from "lucide-react";

const Index = () => {
  const [selectedEmotion, setSelectedEmotion] = useState<string>("");
  const [hasStarted, setHasStarted] = useState(false);

  const handleEmotionSelect = (emotion: string) => {
    setSelectedEmotion(emotion);
    setTimeout(() => setHasStarted(true), 500);
  };

  if (!hasStarted) {
    return (
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <div className="bg-gradient-primary text-primary-foreground py-20">
          <div className="container mx-auto px-4 text-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Emotion-Sensitive Learning
              </h1>
              <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
                Personalized education that adapts to your emotional state for optimal learning experiences
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-12">
                <div className="flex items-center gap-2 text-primary-foreground/90">
                  <Heart className="w-5 h-5" />
                  <span>Emotion-Aware</span>
                </div>
                <div className="flex items-center gap-2 text-primary-foreground/90">
                  <Brain className="w-5 h-5" />
                  <span>Adaptive Content</span>
                </div>
                <div className="flex items-center gap-2 text-primary-foreground/90">
                  <TrendingUp className="w-5 h-5" />
                  <span>Progress Tracking</span>
                </div>
                <div className="flex items-center gap-2 text-primary-foreground/90">
                  <Users className="w-5 h-5" />
                  <span>Supportive Community</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Emotion Selection */}
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-6xl mx-auto">
            <EmotionSelector 
              onEmotionSelect={handleEmotionSelect}
              selectedEmotion={selectedEmotion}
            />
            
            {selectedEmotion && (
              <div className="mt-8 text-center animate-fade-in">
                <Button 
                  size="lg"
                  className="bg-gradient-primary hover:shadow-glow text-lg px-8 py-4"
                  onClick={() => setHasStarted(true)}
                >
                  Start Your Learning Journey
                </Button>
              </div>
            )}
          </div>
        </div>

        {/* Features Section */}
        <div className="bg-muted/30 py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
              How Emotion-Sensitive Learning Works
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <Card className="p-6 text-center border-0 shadow-soft">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">Emotion Check-in</h3>
                <p className="text-muted-foreground">
                  Start each session by sharing how you're feeling. Our system understands your emotional state and adapts accordingly.
                </p>
              </Card>
              
              <Card className="p-6 text-center border-0 shadow-soft">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">Adaptive Content</h3>
                <p className="text-muted-foreground">
                  Content difficulty, pace, and style automatically adjust based on your emotional state for optimal learning.
                </p>
              </Card>
              
              <Card className="p-6 text-center border-0 shadow-soft">
                <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-success" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">Emotional Progress</h3>
                <p className="text-muted-foreground">
                  Track not just what you learn, but how you feel while learning, building emotional intelligence alongside knowledge.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border/50 sticky top-0 z-40 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Heart className="w-5 h-5 text-primary-foreground" />
              </div>
              <h1 className="text-xl font-bold text-foreground">EmoLearn</h1>
            </div>
            <div className="flex items-center gap-4">
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => {
                  setHasStarted(false);
                  setSelectedEmotion("");
                }}
              >
                Change Mood
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <LearningDashboard selectedEmotion={selectedEmotion} />
      </main>
    </div>
  );
};

export default Index;
