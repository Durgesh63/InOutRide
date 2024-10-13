/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { View, Image, ScrollView, Dimensions, StyleSheet } from 'react-native';

const Carousel = () => {
  const { width } = Dimensions.get('window');
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollViewRef = useRef(null);
  const autoScrollRef = useRef(null);

  const data = [
    { uri: 'https://via.placeholder.com/130x150' },
    { uri: 'https://via.placeholder.com/150x130' },
    { uri: 'https://via.placeholder.com/150x150' },
    { uri: 'https://via.placeholder.com/150x150' },
    { uri: 'https://via.placeholder.com/150x150' },
    { uri: 'https://via.placeholder.com/150x150' },
  ];

  useEffect(() => {
    startAutoScroll();
    return () => {
      stopAutoScroll();
    };
  }, [activeIndex, startAutoScroll]);

  const startAutoScroll = useCallback(() => {
    stopAutoScroll();
    autoScrollRef.current = setInterval(() => {
      let nextIndex = activeIndex + 1;
      if (nextIndex >= data.length) {
        nextIndex = 0;
      }
      setActiveIndex(nextIndex);
      scrollViewRef.current.scrollTo({ x: nextIndex * width, animated: true });
    }, 3000);
  });

  const stopAutoScroll = () => {
    if (autoScrollRef.current) {
      clearInterval(autoScrollRef.current);
    }
  };

  const handleMomentumScrollEnd = (event) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setActiveIndex(currentIndex);
    stopAutoScroll();
  };

  const handleScrollEndDrag = () => {
    startAutoScroll();
  };

  return (
    <View style={styles.container} >
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={handleMomentumScrollEnd}
        onScrollEndDrag={handleScrollEndDrag}
        scrollEventThrottle={16}
      >
        {data.map((item, index) => (
          <View key={index} style={[styles.imageContainer, { width: width * 0.8 }]}>
            <Image
              source={{ uri: item.uri }}
              style={styles.image}
              resizeMode="cover"
            />
          </View>
        ))}
      </ScrollView>

      <View style={styles.dotsContainer}>
        {data.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              { backgroundColor: index === activeIndex ? '#000' : '#ccc' },
            ]}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  imageContainer: {
    marginHorizontal: Dimensions.get('window').width * 0.1,
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 200,
  },
  dotsContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
});

export default Carousel;
