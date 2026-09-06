import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  ImageBackground,
  View,
  Image,
} from 'react-native';
import {TVFocusGuideView} from '@amazon-devices/react-native-kepler';
import {Tile} from './components/Tile';
import {tiles} from './data/tiles';

export const App = () => {
  const [focusedTileId, setFocusedTileId] = useState<string>('home');

  const focusedTile = tiles.find((tile) => tile.id === focusedTileId);

  const isHome = focusedTileId === 'home';

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
              <Text style={styles.brandTagline}>Interview rehearsal, reimagined.</Text>
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
              {isHome ? 'Practice before\nit matters.' : focusedTile?.label}
            </Text>

            <Text style={styles.heroDescription}>
              {isHome
                ? 'Build confidence through focused rehearsal — without recording your face or voice.'
                : focusedTile?.description ||
                  'Choose a rehearsal experience to continue.'}
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
          <Text style={styles.navigationTitle}>Choose your next move</Text>
          <Text style={styles.navigationHint}>Use your remote</Text>
        </View>

        <TVFocusGuideView style={styles.tileRowContent}>
          {tiles.map((tile) => (
            <Tile
              key={tile.id}
              label={tile.label}
              icon={tile.icon}
              isFocused={focusedTileId === tile.id}
              onFocus={() => setFocusedTileId(tile.id)}
              onBlur={() => {}}
              testID={`tile-${tile.id}`}
              accessibilityLabel={tile.accessibilityLabel}
              hasTVPreferredFocus={tile.id === 'home'}
            />
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
    paddingHorizontal: 72,
    paddingVertical: 42,
  },

  topBar: {
    height: 76,
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
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: 390,
  },

  heroCopy: {
    flex: 1.1,
    paddingRight: 35,
  },

  eyebrow: {
    color: '#FF8A1F',
    fontSize: 16,
    fontWeight: '800',
    letterSpacing: 2.5,
    marginBottom: 18,
  },

  heroTitle: {
    color: '#FFFFFF',
    fontSize: 64,
    lineHeight: 70,
    fontWeight: '800',
    letterSpacing: -1.2,
  },

  heroDescription: {
    color: 'rgba(255,255,255,0.72)',
    fontSize: 22,
    lineHeight: 32,
    maxWidth: 690,
    marginTop: 22,
  },

  heroMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
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
    width: 430,
    height: 360,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },

  orbitOuter: {
    position: 'absolute',
    width: 330,
    height: 330,
    borderRadius: 165,
    borderWidth: 1,
    borderColor: 'rgba(255,122,0,0.24)',
  },

  orbitInner: {
    position: 'absolute',
    width: 250,
    height: 250,
    borderRadius: 125,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.10)',
  },

  vegaLogo: {
    width: 245,
    height: 190,
  },

  aiBadge: {
    position: 'absolute',
    bottom: 12,
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
    height: 48,
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
    height: 190,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});