import React, { createContext, useContext, useState, useEffect } from "react";

const FollowingContext = createContext();

export const useFollowing = () => {
  const context = useContext(FollowingContext);
  if (!context) {
    throw new Error("useFollowing must be used within a FollowingProvider");
  }
  return context;
};

export const FollowingProvider = ({ children }) => {
  const [followingCount, setFollowingCount] = useState(0);
  const [followingList, setFollowingList] = useState([]);

  // Log when component mounts/unmounts
  useEffect(() => {
    console.log("FollowingProvider mounted");
    return () => {
      console.log("FollowingProvider unmounted");
    };
  }, []);

  // Load following data from localStorage on component mount
  useEffect(() => {
    try {
      const savedFollowingList = localStorage.getItem("followingList");
      const savedFollowingCount = localStorage.getItem("followingCount");

      console.log("Loading following data from localStorage:", {
        savedFollowingList,
        savedFollowingCount,
      });

      if (savedFollowingList) {
        const parsedList = JSON.parse(savedFollowingList);
        // Validate that it's an array
        if (Array.isArray(parsedList)) {
          setFollowingList(parsedList);
          // Ensure count matches the list length
          setFollowingCount(parsedList.length);
          console.log("Loaded following list:", parsedList);
        } else {
          console.warn(
            "Invalid following list format, resetting to empty array"
          );
          localStorage.removeItem("followingList");
        }
      }

      if (savedFollowingCount) {
        const parsedCount = parseInt(savedFollowingCount);
        // Validate that it's a valid number
        if (!isNaN(parsedCount) && parsedCount >= 0) {
          // Don't set count here, let it be set by the list length
          console.log("Loaded following count:", parsedCount);
        } else {
          console.warn("Invalid following count format, resetting to 0");
          localStorage.removeItem("followingCount");
        }
      }
    } catch (error) {
      console.error("Error loading following data from localStorage:", error);
      // Clear corrupted data
      localStorage.removeItem("followingList");
      localStorage.removeItem("followingCount");
    }
  }, []);

  // Save to localStorage whenever followingList changes
  useEffect(() => {
    try {
      localStorage.setItem("followingList", JSON.stringify(followingList));
      localStorage.setItem("followingCount", followingCount.toString());
      console.log("Saved following data to localStorage:", {
        followingList,
        followingCount,
      });
    } catch (error) {
      console.error("Error saving following data to localStorage:", error);
    }
  }, [followingList, followingCount]);

  const followUser = (userId, userName) => {
    if (!userId || !userName) {
      console.warn("Invalid user data for following");
      return;
    }

    if (!followingList.find((user) => user.id === userId)) {
      const newFollowingList = [
        ...followingList,
        { id: userId, name: userName },
      ];
      setFollowingList(newFollowingList);
      setFollowingCount(newFollowingList.length);
      console.log("Followed user:", { userId, userName });
    }
  };

  const unfollowUser = (userId) => {
    if (!userId) {
      console.warn("Invalid user ID for unfollowing");
      return;
    }

    const newFollowingList = followingList.filter((user) => user.id !== userId);
    setFollowingList(newFollowingList);
    setFollowingCount(newFollowingList.length);
    console.log("Unfollowed user:", userId);
  };

  const isFollowing = (userId) => {
    if (!userId) return false;
    const following =
      followingList.find((user) => user.id === userId) !== undefined;
    console.log("Checking if following user:", userId, "Result:", following);
    return following;
  };

  const clearFollowingData = () => {
    console.log("Clearing following data");
    setFollowingList([]);
    setFollowingCount(0);
    try {
      localStorage.removeItem("followingList");
      localStorage.removeItem("followingCount");
    } catch (error) {
      console.error("Error clearing following data from localStorage:", error);
    }
  };

  const value = {
    followingCount,
    followingList,
    followUser,
    unfollowUser,
    isFollowing,
    clearFollowingData,
  };

  return (
    <FollowingContext.Provider value={value}>
      {children}
    </FollowingContext.Provider>
  );
};
