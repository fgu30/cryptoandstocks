import React, {
  useEffect,
  useState,
  useCallback,
  useMemo,
  useRef,
} from "react";
import useWebSocket, { ReadyState } from "react-use-websocket";

import { View, Text } from "react-native";

export default function datasocket() {
  const socketUrl = "wss://stream.binance.com:9443/ws/btcusdt@kline_1m";
  const {
    sendMessage,
    sendJsonMessage,
    lastMessage,
    lastJsonMessage,
    readyState,
    getWebSocket,
  } = useWebSocket(socketUrl, {
    onOpen: () => console.log("opened"),
    //Will attempt to reconnect on all close events, such as server shutting down
    shouldReconnect: (closeEvent) => true,
  });
  console.log(lastJsonMessage);
  useEffect(() => {
    getWebSocket.onmessage = (event) => {
      console.log(event.data);
    };
  }, []);

  return (
    <View>
      <Text></Text>
    </View>
  );
}
