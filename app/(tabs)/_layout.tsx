import { Tabs } from 'expo-router';
import React, { useEffect } from 'react';
import { Platform } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import * as Font from 'expo-font';

export default function BottomNav() {

  useEffect(() => {
    Font.loadAsync({
      // Load the required font icons
      'FontAwesome': require('react-native-vector-icons/Fonts/FontAwesome.ttf'),
      // Add more font files if needed
    });
  }, []);


  const colorScheme = useColorScheme();

  
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,        
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: 'absolute',
            backgroundColor: '#12a661', // Set the tab background color here
          },
          default: {
            position: 'absolute',            
            backgroundColor: '#12a661', // For other platforms, use the same color
          },
        }),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Accueil',
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="house.fill" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="tb2"
        options={{
          title: 'Partenaires',
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name='paperplane.fill' color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="tb3"
        options={{
          title: 'Ecodreum',
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="apple.logo" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="tb4"
        options={{
          title: 'Réseautage',
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="archivebox.fill" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="tb5"
        options={{
          title: 'Profil',
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="checkmark.circle.fill" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
