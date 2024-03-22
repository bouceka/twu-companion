import { Link, Stack, router, useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Pressable,
  Image,
  ImageSourcePropType,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { GestureDetector, Gesture, Directions } from 'react-native-gesture-handler';

import Animated, { FadeIn, FadeOut, SlideOutLeft, SlideInRight } from 'react-native-reanimated';
import { mmkvStorage } from '@/store/mmkv-storage';
import { defaultStyles } from '@/constants/Styles';
import Colors from '@/constants/Colors';
import { UserBio, User } from '@/types';

type Props = {};

interface OnboardingStep {
  type: string;
  title: string;
  image: ImageSourcePropType; // This type is used for images imported using require()
  description: string;
  yesAction?: () => void;
  noAction?: () => void;
}

interface BadgeData {
  id: number; // Unique identifier for each button
  title: string;
  isPressed: boolean;
}

const categories = [
  'Sports',
  'Spiritual Growth',
  'Food',
  'Study Permit',
  'Job seeking',
  'MSP',
  'Tutoring',
  'Registration',
  'Parking',
  'Housing',
  'Volunteering',
];

const Onboarding = (props: Props) => {

  const [screenIndex, setScreenIndex] = useState(0);
  const [userBio, setUserBio] = useState<Partial<UserBio>>({});

  const [badgesData, setBadgesData] = useState<BadgeData[]>(
    categories.map((category, index) => ({
      id: index + 1,
      title: category,
      isPressed: false,
    }))
  );

  // const router = useRouter()
  // // const [showOnboarding, setShowOnboarding] = useState(false);

  const handleOnboarded = async () => {
    const onboard = await mmkvStorage.getItem('onboard');
    if (onboard !== null) {
      router.navigate('(tabs)');
    }
  };

  useEffect(() => {
    handleOnboarded();
  }, []);

  const onContinue = () => {
    const isLastScreen = screenIndex === onboardingSteps.length - 1;
    if (isLastScreen) {
      endOnboarding();
    } else {
      setScreenIndex(screenIndex + 1);
    }
  };

  const updateUserData = (key: keyof UserBio, value: any) => {
    setUserBio((bioData) => ({
      ...bioData,
      [key]: value,
    }));
    onContinue();
  };

  const onBack = () => {
    const isFirstScreen = screenIndex === 0;
    if (isFirstScreen) {
      endOnboarding();
    } else {
      setScreenIndex(screenIndex - 1);
    }
  };

  const endOnboarding = async () => {
    setScreenIndex(0);
    console.log(userBio);
    await mmkvStorage.setItem('onboard', JSON.stringify(userBio));
    router.navigate('(tabs)');
  };

  const swipes = Gesture.Simultaneous(
    Gesture.Fling().direction(Directions.LEFT).onEnd(onContinue),
    Gesture.Fling().direction(Directions.RIGHT).onEnd(onBack)
  );

  const onboardingSteps: OnboardingStep[] = [
    {
      type: 'login',
      title: 'Welcome to\n TWU Companion',
      image: require('@/assets/images/undraw_Login.png'),
      description: 'Do you have a TWU Companion account?',
      yesAction: () => endOnboarding(),
      noAction: () => onContinue(),
    },
    {
      type: 'enrolled',
      title: 'Let me get to know you better',
      image: require('@/assets/images/undraw_true_friends.png'),
      description: 'Are you currently enrolled at TWU?',
      yesAction: () => updateUserData('isEnrolled', true),
      noAction: () => updateUserData('isEnrolled', false),
    },
    {
      type: 'international',
      title: 'Let me get to know you better',
      image: require('@/assets/images/undraw_road_to_knowledge.png'),
      description: 'Are you an international student?',
      yesAction: () => updateUserData('status', true),
      noAction: () => updateUserData('status', false),
    },
    {
      type: 'categories',
      title: 'Please select at least three topics',
      image: require('@/assets/images/undraw_Certification.png'),
      description: 'What can I help you with?',
    },
  ];

  const data = onboardingSteps[screenIndex];

  const onBadgeClick = (id: number, category: string) => {
    setBadgesData((currentButtonsData) =>
      currentButtonsData.map((button) => (button.id === id ? { ...button, isPressed: !button.isPressed } : button))
    );

    setUserBio((currentBio) => {
      // Initialize interests if it doesn't exist
      const interests = currentBio.interests || [];
      const categoryIndex = interests.findIndex((c) => c === category);

      if (categoryIndex === -1) {
        // Category not found, add it
        return { ...currentBio, interests: [...interests, category] };
      } else {
        // Category found, remove it
        return {
          ...currentBio,
          interests: interests.filter((_, index) => index !== categoryIndex),
        };
      }
    });
  };

  return (
    <SafeAreaView style={styles.page}>
      <Stack.Screen options={{ headerShown: false }} />
      <StatusBar style='dark' />

      <View style={styles.stepIndicatorContainer}>
        {onboardingSteps.map((step, index) => (
          <View
            key={index}
            style={[
              styles.stepIndicator,
              { backgroundColor: index === screenIndex ? Colors.trinityBlue : Colors.socialGrey },
            ]}
          />
        ))}
      </View>
      <View style={styles.skip}>
        <Text style={defaultStyles.link} onPress={onBack}>
          Back
        </Text>
        <Text style={defaultStyles.link} onPress={endOnboarding}>
          Skip
        </Text>
      </View>

      <GestureDetector gesture={swipes}>
        <View style={styles.pageContent} key={screenIndex}>
          <Animated.View entering={FadeIn} exiting={FadeOut}>
            <View>
              <Image style={styles.image} source={data.image} />
            </View>
          </Animated.View>

          <View style={styles.content}>
            {data.type === 'categories' ? (
              <Animated.View entering={SlideInRight} exiting={SlideOutLeft} style={styles.badgeGroup}>
                {badgesData.map((badge) => (
                  <TouchableOpacity
                    onPress={() => onBadgeClick(badge.id, badge.title)}
                    key={badge.id}
                    style={[
                      {
                        ...styles.badge,
                        backgroundColor: badge.isPressed ? Colors.accessibleBlue : Colors.background,
                      },
                    ]}
                  >
                    <Text style={[styles.badgeText, { color: badge.isPressed ? Colors.white : Colors.trinityBlue }]}>
                      {badge.title}
                    </Text>
                  </TouchableOpacity>
                ))}
              </Animated.View>
            ) : (
              <View>
                <Animated.Text entering={SlideInRight} exiting={SlideOutLeft} style={styles.title}>
                  {data.title}
                </Animated.Text>
                <Animated.Text entering={SlideInRight.delay(50)} exiting={SlideOutLeft} style={styles.description}>
                  {data.description}
                </Animated.Text>
              </View>
            )}
          </View>
          <View style={styles.buttonsRow}>
            {data.type === 'categories' ? (
              <Pressable onPress={endOnboarding} style={defaultStyles.btn}>
                <Text style={defaultStyles.btnText}>Finish</Text>
              </Pressable>
            ) : (
              <>
                <Pressable onPress={data.noAction} style={defaultStyles.btnOutline}>
                  <Text style={defaultStyles.btnOutlineText}>No</Text>
                </Pressable>
                <Pressable onPress={data.yesAction} style={defaultStyles.btn}>
                  <Text style={defaultStyles.btnText}>Yes</Text>
                </Pressable>
              </>
            )}
          </View>
        </View>
      </GestureDetector>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  skip: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 16,
  },
  page: {
    justifyContent: 'center',
    flex: 1,
    backgroundColor: Colors.background,
  },
  pageContent: {
    padding: 20,
    flex: 1,
  },
  image: {
    alignSelf: 'center',
    height: 240,
    width: 320,
    objectFit: 'cover',
    margin: 20,
    marginTop: 24,
  },
  title: {
    fontSize: 40,
    letterSpacing: 1.3,
    marginVertical: 10,
    textAlign: 'center',
  },
  description: {
    color: Colors.elegantGrey,
    fontSize: 28,
    lineHeight: 32,
    textAlign: 'center',
  },
  content: {
    display: 'flex',
    justifyContent: 'center',
    gap: 16,
  },
  buttonsRow: {
    marginTop: 'auto',
    marginBottom: 32,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    gap: 20,
  },
  badgeGroup: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    justifyContent: 'center',
    marginTop: 24,
  },
  badge: {
    borderWidth: 2,
    borderColor: Colors.accessibleBlue,
    borderRadius: 4,
    paddingHorizontal: 8,
  },
  badgeText: {
    fontSize: 20,
    lineHeight: 32,
    fontWeight: '400',
  },
  stepIndicatorContainer: {
    flexDirection: 'row',
    gap: 8,
    marginHorizontal: 15,
    marginTop: 16,
  },
  stepIndicator: {
    flex: 1,
    height: 4,
    backgroundColor: 'gray',
    borderRadius: 10,
  },
});

export default Onboarding;
