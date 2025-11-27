import { useEffect, useRef } from "react";

export const useBroadcast = <T,>(
  channelName: string,
  onMessage: (data: T) => void
) => {
  const channelRef = useRef<BroadcastChannel | null>(null);

  useEffect(() => {
    const channel = new BroadcastChannel(channelName);
    channelRef.current = channel;

    channel.onmessage = (event) => {
      onMessage(event.data as T);
    };

    return () => channel.close();
  }, [channelName, onMessage]);

  const sendMessage = (data: T) => {
    channelRef.current?.postMessage(data);
  };

  return { sendMessage };
};
