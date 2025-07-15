import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Smile, Zap, Target, Frown, Star } from "lucide-react";

const emotions = [
  { id: "calm", label: "Calm", icon: Smile, color: "emotion-calm", description: "Feeling peaceful and relaxed" },
  { id: "energetic", label: "Energetic", icon: Zap, color: "emotion-energetic", description: "Full of energy and ready to learn" },
  { id: "focused", label: "Focused", icon: Target, color: "emotion-focused", description: "Ready to concentrate deeply" },
  { id: "stressed", label: "Stressed", icon: Frown, color: "emotion-stressed", description: "Feeling overwhelmed or anxious" },
  { id: "confident", label: "Confident", icon: Star, color: "emotion-confident", description: "Feeling positive and capable" },
];

interface EmotionSelectorProps {
  onEmotionSelect: (emotion: string) => void;
  selectedEmotion?: string;
}

export function EmotionSelector({ onEmotionSelect, selectedEmotion }: EmotionSelectorProps) {
  return (
    <Card className="p-6 bg-gradient-calm border-0 shadow-soft">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-semibold text-foreground mb-2">How are you feeling today?</h2>
        <p className="text-muted-foreground">Let's personalize your learning experience</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {emotions.map((emotion) => {
          const Icon = emotion.icon;
          const isSelected = selectedEmotion === emotion.id;
          
          return (
            <Button
              key={emotion.id}
              variant={isSelected ? "default" : "outline"}
              className={`
                h-auto p-4 flex flex-col items-center gap-3 relative overflow-hidden
                transition-all duration-300 hover:scale-105
                ${isSelected ? 'bg-primary shadow-glow' : 'bg-card hover:bg-muted/50'}
              `}
              onClick={() => onEmotionSelect(emotion.id)}
            >
              <div 
                className={`
                  w-12 h-12 rounded-full flex items-center justify-center
                  ${isSelected ? 'bg-primary-foreground/20' : `bg-${emotion.color}/20`}
                `}
              >
                <Icon 
                  className={`
                    w-6 h-6 
                    ${isSelected ? 'text-primary-foreground' : `text-${emotion.color}`}
                  `} 
                />
              </div>
              <div className="text-center">
                <div className={`font-medium ${isSelected ? 'text-primary-foreground' : 'text-foreground'}`}>
                  {emotion.label}
                </div>
                <div className={`text-xs mt-1 ${isSelected ? 'text-primary-foreground/80' : 'text-muted-foreground'}`}>
                  {emotion.description}
                </div>
              </div>
            </Button>
          );
        })}
      </div>
    </Card>
  );
}