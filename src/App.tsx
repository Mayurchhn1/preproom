import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  ImageBackground,
  View,
  Image,
  Pressable,
} from 'react-native';
import {TVFocusGuideView} from '@amazon-devices/react-native-kepler';
import {Tile} from './components/Tile';
import {tiles} from './data/tiles';
import {rehearsalGoals} from './data/rehearsal/goals';
import {rehearsalStrategies} from './data/rehearsal/strategies';

export const App = () => {
  const [focusedTileId, setFocusedTileId] = useState<string>('home');
  const [activeView, setActiveView] = useState<
    'home' | 'goal' | 'strategy'
  >('home');
  const [focusedGoalId, setFocusedGoalId] = useState<string>('clarity');
  const [selectedGoalId, setSelectedGoalId] = useState<string | null>(null);
  const [focusedStrategyId, setFocusedStrategyId] = useState<string | null>(
    null,
  );
  const [selectedStrategyId, setSelectedStrategyId] = useState<string | null>(
    null,
  );
  const [rehearsalStarted, setRehearsalStarted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [rehearsalComplete, setRehearsalComplete] = useState(false);
  const [reviewStarted, setReviewStarted] = useState(false);
  const [focusedEvidenceId, setFocusedEvidenceId] = useState<string>('main-point');
  const [selectedEvidenceId, setSelectedEvidenceId] = useState<string | null>(null);
  const [improvementStarted, setImprovementStarted] = useState(false);

  const rehearsalQuestions = [
    'Tell me about a time you solved a difficult problem.',
    'What did you learn from that experience?',
    'How would you approach a similar problem today?',
  ];

  const focusedTile = tiles.find((tile) => tile.id === focusedTileId);

  const isHome = activeView === 'home';
  const isGoal = activeView === 'goal';

  const selectedGoal = rehearsalGoals.find(
    (goal) => goal.id === selectedGoalId,
  );

  const availableStrategies = rehearsalStrategies.filter(
    (strategy) => strategy.goalId === selectedGoalId,
  );

  if (improvementStarted) {
    const activeStrategy = availableStrategies.find(
      (strategy) => strategy.title === selectedStrategyId,
    );

    const selectedEvidence = [
      {
        id: 'main-point',
        title: 'Main point',
        description: 'Lead with the answer before adding supporting detail.',
      },
      {
        id: 'evidence',
        title: 'Evidence',
        description: 'Use one specific example to make your answer concrete.',
      },
      {
        id: 'takeaway',
        title: 'Takeaway',
        description: 'Finish with a clear conclusion the interviewer can remember.',
      },
    ].find((item) => item.id === selectedEvidenceId);

    return (
      <ImageBackground
        source={require('./assets/background.png')}
        style={styles.background}
        resizeMode="cover">
        <View style={styles.overlay} />

        <View style={styles.content}>
          <View style={styles.topBar}>
            <View style={styles.brand}>
              <View style={styles.brandMark}>
                <Text style={styles.brandMarkText}>P</Text>
              </View>

              <View>
                <Text style={styles.brandName}>PREPROOM</Text>
                <Text style={styles.brandTagline}>
                  Interview rehearsal, reimagined.
                </Text>
              </View>
            </View>

            <View style={styles.privacyBadge}>
              <View style={styles.privacyDot} />
              <Text style={styles.privacyText}>PRIVATE BY DESIGN</Text>
            </View>
          </View>

          <View style={styles.hero}>
            <View style={styles.heroCopy}>
              <Text style={styles.eyebrow}>IMPROVEMENT DECISION</Text>

              <Text style={styles.heroTitle}>
                Improve one thing.
              </Text>

              <Text style={styles.heroDescription}>
                Your next rehearsal will focus on one specific, observable improvement.
              </Text>

              <View style={styles.heroMeta}>
                <View style={styles.metaItem}>
                  <Text style={styles.metaValue}>
                    {selectedEvidence?.title ?? 'FOCUS'}
                  </Text>
                  <Text style={styles.metaLabel}>IMPROVEMENT</Text>
                </View>

                <View style={styles.metaDivider} />

                <View style={styles.metaItem}>
                  <Text style={styles.metaValue}>
                    {activeStrategy?.title ?? 'REHEARSAL'}
                  </Text>
                  <Text style={styles.metaLabel}>STRATEGY</Text>
                </View>
              </View>
            </View>

            <View style={styles.heroVisual}>
              <Image
                source={require('./assets/vega.png')}
                style={styles.heroImage}
                resizeMode="contain"
              />
            </View>
          </View>

          <Pressable
            style={styles.navigationHeader}
            onPress={() => {
              setCurrentQuestionIndex(0);
              setRehearsalComplete(false);
              setReviewStarted(false);
              setImprovementStarted(false);
              setRehearsalStarted(true);
            }}
            accessibilityRole="button"
            accessibilityLabel="Retry rehearsal with this improvement focus. Press OK to continue."
            hasTVPreferredFocus>
            <Text style={styles.navigationTitle}>
              Retry with {selectedEvidence?.title ?? 'this improvement'}.
            </Text>

            <Text style={styles.navigationHint}>Press OK to retry</Text>
          </Pressable>
        </View>
      </ImageBackground>
    );
  }

  if (reviewStarted) {
    const activeStrategy = availableStrategies.find(
      (strategy) => strategy.title === selectedStrategyId,
    );

    const reviewEvidence = [
      {
        id: 'main-point',
        number: '01',
        title: 'Main point',
        description: 'Lead with the answer before adding supporting detail.',
      },
      {
        id: 'evidence',
        number: '02',
        title: 'Evidence',
        description: 'Use one specific example to make your answer concrete.',
      },
      {
        id: 'takeaway',
        number: '03',
        title: 'Takeaway',
        description: 'Finish with a clear conclusion the interviewer can remember.',
      },
    ];

    return (
      <ImageBackground
        source={require('./assets/background.png')}
        style={styles.background}
        resizeMode="cover">
        <View style={styles.overlay} />

        <View style={styles.content}>
          <View style={styles.topBar}>
            <View style={styles.brand}>
              <View style={styles.brandMark}>
                <Text style={styles.brandMarkText}>P</Text>
              </View>

              <View>
                <Text style={styles.brandName}>PREPROOM</Text>
                <Text style={styles.brandTagline}>
                  Interview rehearsal, reimagined.
                </Text>
              </View>
            </View>

            <View style={styles.privacyBadge}>
              <View style={styles.privacyDot} />
              <Text style={styles.privacyText}>PRIVATE BY DESIGN</Text>
            </View>
          </View>

          <View style={styles.hero}>
            <View style={styles.heroCopy}>
              <Text style={styles.eyebrow}>REVIEW</Text>

              <Text style={styles.heroTitle}>
                Review your rehearsal.
              </Text>

              <Text style={styles.heroDescription}>
                Your next improvement starts with clear evidence, not a black-box score.
              </Text>

              <View style={styles.heroMeta}>
                <View style={styles.metaItem}>
                  <Text style={styles.metaValue}>03</Text>
                  <Text style={styles.metaLabel}>EVIDENCE</Text>
                </View>

                <View style={styles.metaDivider} />

                <View style={styles.metaItem}>
                  <Text style={styles.metaValue}>
                    {activeStrategy?.title ?? 'CLARITY'}
                  </Text>
                  <Text style={styles.metaLabel}>FOCUS</Text>
                </View>
              </View>
            </View>

            <View style={styles.heroVisual}>
              <Image
                source={require('./assets/vega.png')}
                style={styles.heroImage}
                resizeMode="contain"
              />
            </View>
          </View>

          <View style={styles.reviewHeader}>
            <Text style={styles.reviewHeaderTitle}>
              {selectedEvidenceId
                ? `Improvement selected: ${
                    reviewEvidence.find(
                      (item) => item.id === selectedEvidenceId,
                    )?.title
                  }`
                : 'Evidence to consider'}
            </Text>

            <Text style={styles.navigationHint}>
              {selectedEvidenceId
                ? 'Press OK to continue'
                : 'Choose your next improvement'}
            </Text>
          </View>

          <View style={styles.reviewRow}>
            {reviewEvidence.map((item) => (
              <Pressable
                key={item.number}
                style={[
                  styles.reviewCard,
                  focusedEvidenceId === item.id
                    ? styles.reviewCardFocused
                    : styles.reviewCardDefault,
                ]}
                onFocus={() => setFocusedEvidenceId(item.id)}
                onPress={() => {
                  if (selectedEvidenceId === item.id) {
                    setImprovementStarted(true);
                  } else {
                    setSelectedEvidenceId(item.id);
                  }
                }}
                accessibilityRole="button"
                accessibilityLabel={`${item.title}. ${item.description}`}
                hasTVPreferredFocus={item.id === 'main-point'}>
                <Text style={styles.reviewNumber}>{item.number}</Text>

                <Text style={styles.reviewTitle}>{item.title}</Text>

                <Text style={styles.reviewDescription}>
                  {item.description}
                </Text>
              </Pressable>
            ))}
          </View>
        </View>
      </ImageBackground>
    );
  }

  if (rehearsalComplete) {
    const activeStrategy = availableStrategies.find(
      (strategy) => strategy.title === selectedStrategyId,
    );

    return (
      <ImageBackground
        source={require('./assets/background.png')}
        style={styles.background}
        resizeMode="cover">
        <View style={styles.overlay} />

        <View style={styles.content}>
          <View style={styles.topBar}>
            <View style={styles.brand}>
              <View style={styles.brandMark}>
                <Text style={styles.brandMarkText}>P</Text>
              </View>

              <View>
                <Text style={styles.brandName}>PREPROOM</Text>
                <Text style={styles.brandTagline}>
                  Interview rehearsal, reimagined.
                </Text>
              </View>
            </View>

            <View style={styles.privacyBadge}>
              <View style={styles.privacyDot} />
              <Text style={styles.privacyText}>PRIVATE BY DESIGN</Text>
            </View>
          </View>

          <View style={styles.hero}>
            <View style={styles.heroCopy}>
              <Text style={styles.eyebrow}>REHEARSAL COMPLETE</Text>

              <Text style={styles.heroTitle}>
                Nice work.
              </Text>

              <Text style={styles.heroDescription}>
                You completed all {activeStrategy?.questionCount ?? 3} questions
                in your {activeStrategy?.title ?? 'interview rehearsal'}.
              </Text>

              <View style={styles.heroMeta}>
                <View style={styles.metaItem}>
                  <Text style={styles.metaValue}>03</Text>
                  <Text style={styles.metaLabel}>QUESTIONS</Text>
                </View>

                <View style={styles.metaDivider} />

                <View style={styles.metaItem}>
                  <Text style={styles.metaValue}>DONE</Text>
                  <Text style={styles.metaLabel}>STATUS</Text>
                </View>
              </View>
            </View>

            <View style={styles.heroVisual}>
              <Image
                source={require('./assets/vega.png')}
                style={styles.heroImage}
                resizeMode="contain"
              />
            </View>
          </View>

          <Pressable
            style={styles.navigationHeader}
            onPress={() => setReviewStarted(true)}
            accessibilityRole="button"
            accessibilityLabel="Review your rehearsal. Press OK to continue."
            hasTVPreferredFocus>
            <Text style={styles.navigationTitle}>
              Next: review your rehearsal.
            </Text>

            <Text style={styles.navigationHint}>Press OK to continue</Text>
          </Pressable>
        </View>
      </ImageBackground>
    );
  }

  if (rehearsalStarted) {
    const activeStrategy = availableStrategies.find(
      (strategy) => strategy.title === selectedStrategyId,
    );

    return (
      <ImageBackground
        source={require('./assets/background.png')}
        style={styles.background}
        resizeMode="cover">
        <View style={styles.overlay} />

        <View style={styles.content}>
          <View style={styles.topBar}>
            <View style={styles.brand}>
              <View style={styles.brandMark}>
                <Text style={styles.brandMarkText}>P</Text>
              </View>
              <View>
                <Text style={styles.brandName}>PREPROOM</Text>
                <Text style={styles.brandTagline}>
                  Interview rehearsal, reimagined.
                </Text>
              </View>
            </View>

            <View style={styles.privacyBadge}>
              <View style={styles.privacyDot} />
              <Text style={styles.privacyText}>PRIVATE BY DESIGN</Text>
            </View>
          </View>

          <View style={styles.hero}>
            <View style={styles.heroCopy}>
              <Text style={styles.eyebrow}>REHEARSAL</Text>

              <Text style={styles.heroTitle}>
                Question {currentQuestionIndex + 1} of{' '}
                {activeStrategy?.questionCount ?? rehearsalQuestions.length}
              </Text>

              <Text style={styles.heroDescription}>
                {rehearsalQuestions[currentQuestionIndex]}
              </Text>

              <View style={styles.heroMeta}>
                <Text style={styles.metaValue}>
                  {activeStrategy?.title ?? 'Interview rehearsal'}
                </Text>
              </View>
            </View>

            <View style={styles.heroVisual}>
              <Image
                source={require('./assets/vega.png')}
                style={styles.heroImage}
                resizeMode="contain"
              />
            </View>
          </View>

          <Pressable
            style={styles.navigationHeader}
            onPress={() => {
              if (currentQuestionIndex < rehearsalQuestions.length - 1) {
                setCurrentQuestionIndex((index) => index + 1);
              } else {
                setRehearsalComplete(true);
              }
            }}
            accessibilityRole="button"
            accessibilityLabel={`Question ${currentQuestionIndex + 1} of ${rehearsalQuestions.length}. Press OK for the next question.`}
            hasTVPreferredFocus>
            <Text style={styles.navigationTitle}>
              Take your time. Focus on the main point.
            </Text>

            <Text style={styles.navigationHint}>
              {currentQuestionIndex < rehearsalQuestions.length - 1
                ? 'Press OK for next question'
                : 'Final question'}
            </Text>
          </Pressable>
        </View>
      </ImageBackground>
    );
  }

  return (
    <ImageBackground
      source={require('./assets/background.png')}
      style={styles.background}
      resizeMode="cover">
      <View style={styles.overlay} />

      <View style={styles.content}>
        {/* Top brand bar */}
        <View style={styles.topBar}>
          <View style={styles.brand}>
            <View style={styles.brandMark}>
              <Text style={styles.brandMarkText}>P</Text>
            </View>

            <View>
              <Text style={styles.brandName}>PREPROOM</Text>
              <Text style={styles.brandTagline}>
                Interview rehearsal, reimagined.
              </Text>
            </View>
          </View>

          <View style={styles.privacyBadge}>
            <View style={styles.privacyDot} />
            <Text style={styles.privacyText}>PRIVATE BY DESIGN</Text>
          </View>
        </View>

        {/* Hero */}
        <View style={styles.hero}>
          <View style={styles.heroCopy}>
            <Text style={styles.eyebrow}>
              {isHome ? 'YOUR INTERVIEW GYM' : 'CURRENT SESSION'}
            </Text>

            <Text style={styles.heroTitle}>
              {isHome
                ? 'Practice before\nit matters.'
                : isGoal
                  ? 'Set your goal.'
                  : 'Choose your strategy.'}
            </Text>

            <Text style={styles.heroDescription}>
              {isHome
                ? 'Build confidence through focused rehearsal — without recording your face or voice.'
                : isGoal
                  ? 'Choose what you want to improve in your next interview rehearsal.'
                  : availableStrategies[0]?.summary ??
                    'Choose a focused rehearsal strategy for your selected goal.'}
            </Text>

            <View style={styles.heroMeta}>
              <View style={styles.metaItem}>
                <Text style={styles.metaValue}>01</Text>
                <Text style={styles.metaLabel}>GOAL</Text>
              </View>

              <View style={styles.metaDivider} />

              <View style={styles.metaItem}>
                <Text style={styles.metaValue}>02</Text>
                <Text style={styles.metaLabel}>REHEARSE</Text>
              </View>

              <View style={styles.metaDivider} />

              <View style={styles.metaItem}>
                <Text style={styles.metaValue}>03</Text>
                <Text style={styles.metaLabel}>IMPROVE</Text>
              </View>
            </View>
          </View>

          <View style={styles.heroVisual}>
            <View style={styles.orbitOuter} />
            <View style={styles.orbitInner} />

            <Image
              source={require('./assets/vega.png')}
              style={styles.vegaLogo}
              resizeMode="contain"
              testID="vega-logo"
            />

            <View style={styles.aiBadge}>
              <View style={styles.aiDot} />
              <Text style={styles.aiText}>READY TO REHEARSE</Text>
            </View>
          </View>
        </View>

        {/* Navigation */}
        <View style={styles.navigationHeader}>
          <Text style={styles.navigationTitle}>
            {isHome
              ? 'Choose your next move'
              : isGoal
                ? selectedGoalId
                  ? `Goal selected: ${selectedGoal?.label}`
                  : 'Choose your goal'
                : selectedStrategyId
                  ? `Strategy selected: ${
                      availableStrategies.find(
                        (strategy) => strategy.title === selectedStrategyId,
                      )?.title
                    }`
                  : 'Choose your rehearsal strategy'}
          </Text>

          <Text style={styles.navigationHint}>
            {isHome
              ? 'Use your remote'
              : isGoal
                ? selectedGoalId
                  ? 'Ready to rehearse'
                  : 'Use your remote'
                : selectedStrategyId
                  ? 'Press OK to continue'
                  : 'Use your remote'}
          </Text>
        </View>

        <TVFocusGuideView style={styles.tileRowContent}>
          {isHome
            ? tiles.map((tile) => (
                <Tile
                  key={tile.id}
                  label={tile.label}
                  icon={tile.icon}
                  isFocused={focusedTileId === tile.id}
                  onFocus={() => setFocusedTileId(tile.id)}
                  onBlur={() => {}}
                  onPress={() => {
                    if (tile.id === 'get-started') {
                      setActiveView('goal');
                      setFocusedGoalId('clarity');
                      setSelectedGoalId(null);
                      setFocusedStrategyId(null);
                      setSelectedStrategyId(null);
                    }
                  }}
                  testID={`tile-${tile.id}`}
                  accessibilityLabel={tile.accessibilityLabel}
                  hasTVPreferredFocus={tile.id === 'home'}
                />
              ))
            : isGoal
              ? rehearsalGoals.map((goal) => (
                  <Tile
                    key={goal.id}
                    label={goal.label}
                    iconText={
                      goal.id === 'clarity'
                        ? '◉'
                        : goal.id === 'confidence'
                          ? '◆'
                          : '≡'
                    }
                    isFocused={focusedGoalId === goal.id}
                    onFocus={() => setFocusedGoalId(goal.id)}
                    onBlur={() => {}}
                    onPress={() => {
                      setSelectedGoalId(goal.id);
                      setFocusedStrategyId(null);
                      setSelectedStrategyId(null);
                      setActiveView('strategy');
                    }}
                    testID={`goal-${goal.id}`}
                    accessibilityLabel={goal.description}
                    hasTVPreferredFocus={goal.id === 'clarity'}
                  />
                ))
              : availableStrategies.map((strategy, index) => (
                  <Pressable
                    key={strategy.title}
                    style={[
                      styles.strategyCard,
                      focusedStrategyId === strategy.title
                        ? styles.strategyCardFocused
                        : styles.strategyCardDefault,
                    ]}
                    onFocus={() => setFocusedStrategyId(strategy.title)}
                    onPress={() => {
                      if (selectedStrategyId === strategy.title) {
                        setCurrentQuestionIndex(0);
                        setRehearsalComplete(false);
                        setRehearsalStarted(true);
                      } else {
                        setSelectedStrategyId(strategy.title);
                      }
                    }}
                    testID={`strategy-${strategy.goalId}`}
                    accessibilityRole="button"
                    accessibilityLabel={`${strategy.title}. ${strategy.summary} ${strategy.questionCount} questions, approximately ${strategy.estimatedMinutes} minutes.`}
                    hasTVPreferredFocus={index === 0}>
                    <Text style={styles.strategyNumber}>{index + 1}</Text>

                    <View style={styles.strategyCardBody}>
                      <Text style={styles.strategyTitle}>
                        {strategy.title}
                      </Text>

                      <Text style={styles.strategySummary}>
                        {strategy.summary}
                      </Text>

                      <Text style={styles.strategyMeta}>
                        {strategy.questionCount} QUESTIONS  ·{' '}
                        {strategy.estimatedMinutes} MINUTES
                      </Text>
                    </View>
                  </Pressable>
                ))}
        </TVFocusGuideView>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#07111F',
  },

  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(4, 10, 20, 0.34)',
  },

  content: {
    flex: 1,
    paddingHorizontal: 32,
    paddingVertical: 24,
  },

  topBar: {
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  brand: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  brandMark: {
    width: 48,
    height: 48,
    borderRadius: 14,
    backgroundColor: '#FF7A00',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
  },

  brandMarkText: {
    color: '#FFFFFF',
    fontSize: 28,
    fontWeight: '900',
  },

  brandName: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: '800',
    letterSpacing: 3,
  },

  brandTagline: {
    color: 'rgba(255,255,255,0.58)',
    fontSize: 13,
    marginTop: 3,
  },

  privacyBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 20,
    backgroundColor: 'rgba(255,255,255,0.08)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.12)',
  },

  privacyDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#55D68A',
    marginRight: 9,
  },

  privacyText: {
    color: 'rgba(255,255,255,0.78)',
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 1.2,
  },

  hero: {
    height: 245,
    flexDirection: 'row',
    alignItems: 'center',
  },

  heroCopy: {
    width: 500,
    flexShrink: 0,
    paddingRight: 24,
  },

  eyebrow: {
    color: '#FF8A1F',
    fontSize: 13,
    fontWeight: '800',
    letterSpacing: 2.5,
    marginBottom: 10,
  },

  heroTitle: {
    color: '#FFFFFF',
    fontSize: 44,
    lineHeight: 48,
    fontWeight: '800',
    letterSpacing: -1.2,
  },

  heroDescription: {
    color: 'rgba(255,255,255,0.72)',
    fontSize: 17,
    lineHeight: 24,
    maxWidth: 480,
    marginTop: 14,
  },

  heroMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 18,
  },

  heroImage: {
    width: 230,
    height: 230,
  },

  metaItem: {
    minWidth: 90,
  },

  metaValue: {
    color: '#FFFFFF',
    fontSize: 19,
    fontWeight: '800',
  },

  metaLabel: {
    color: 'rgba(255,255,255,0.48)',
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 1.4,
    marginTop: 4,
  },

  metaDivider: {
    width: 1,
    height: 32,
    backgroundColor: 'rgba(255,255,255,0.16)',
    marginHorizontal: 18,
  },

  heroVisual: {
    width: 280,
    height: 230,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },

  orbitOuter: {
    position: 'absolute',
    width: 220,
    height: 220,
    borderRadius: 110,
    borderWidth: 1,
    borderColor: 'rgba(255,122,0,0.24)',
  },

  orbitInner: {
    position: 'absolute',
    width: 170,
    height: 170,
    borderRadius: 85,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.10)',
  },

  vegaLogo: {
    width: 170,
    height: 130,
  },

  aiBadge: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 9,
    borderRadius: 18,
    backgroundColor: 'rgba(5,15,27,0.82)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.12)',
  },

  aiDot: {
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: '#55D68A',
    marginRight: 8,
  },

  aiText: {
    color: 'rgba(255,255,255,0.82)',
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 1.1,
  },

  navigationHeader: {
    height: 36,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  navigationTitle: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '700',
  },

  navigationHint: {
    color: 'rgba(255,255,255,0.42)',
    fontSize: 14,
  },

  tileRowContent: {
    height: 150,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  reviewHeader: {
    height: 36,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  reviewHeaderTitle: {
    color: '#FFFFFF',
    fontSize: 21,
    fontWeight: '800',
  },

  reviewRow: {
    height: 150,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  reviewCard: {
    width: 300,
    height: 140,
    borderRadius: 16,
    paddingHorizontal: 20,
    paddingVertical: 16,
  },

  reviewCardDefault: {
    backgroundColor: '#0074B8',
  },

  reviewCardFocused: {
    backgroundColor: '#FF6200',
    transform: [{scale: 1.03}],
  },

  reviewNumber: {
    color: '#FF6200',
    fontSize: 13,
    fontWeight: '900',
    letterSpacing: 1,
  },

  reviewTitle: {
    color: '#FFFFFF',
    fontSize: 23,
    lineHeight: 28,
    fontWeight: '800',
    marginTop: 8,
  },

  reviewDescription: {
    color: 'rgba(255,255,255,0.78)',
    fontSize: 13,
    lineHeight: 18,
    marginTop: 6,
  },

  strategyCard: {
    width: 520,
    height: 140,
    borderRadius: 16,
    paddingHorizontal: 24,
    paddingVertical: 18,
    flexDirection: 'row',
    alignItems: 'center',
  },

  strategyCardDefault: {
    backgroundColor: '#0074B8',
  },

  strategyCardFocused: {
    backgroundColor: '#FF6200',
    transform: [{scale: 1.03}],
  },

  strategyNumber: {
    color: '#FFFFFF',
    fontSize: 34,
    fontWeight: '900',
    width: 54,
    textAlign: 'center',
  },

  strategyCardBody: {
    flex: 1,
    paddingLeft: 20,
  },

  strategyTitle: {
    color: '#FFFFFF',
    fontSize: 24,
    lineHeight: 28,
    fontWeight: '800',
  },

  strategySummary: {
    color: 'rgba(255,255,255,0.78)',
    fontSize: 13,
    lineHeight: 18,
    marginTop: 5,
  },

  strategyMeta: {
    color: 'rgba(255,255,255,0.58)',
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 1.2,
    marginTop: 8,
  },
});
