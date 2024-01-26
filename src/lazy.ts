import { lazy } from "solid-js";

export const LazyButton = lazy(() => import("~/components/button"));
export const LazyRow = lazy(() => import("~/components/row"));
export const LazyCol = lazy(() => import("~/components/col"));
export const LazyProgress = lazy(() => import("~/components/progress"));
export const LazyDropdown = lazy(() => import("~/components/dropdown"));
export const LazyLink = lazy(() => import("~/components/link"));
export const LazyFlex = lazy(() => import("~/components/flex"));
export const LazyEmpty = lazy(() => import("~/components/empty"));
export const LazyList = lazy(() => import("~/components/list"));
export const LazyFileTypeIcon = lazy(
  () => import("~/components/file-type-icon"),
);
export const LazyFloatButton = lazy(
  () => import("~/components/floatButton/button"),
);
export const LazyFloatButtonGroup = lazy(
  () => import("~/components/floatButton/group"),
);

export const LazySend = lazy(() => import("~/pages/send"));
// export const LazySendFileList = lazy(() => import("~/pages/send/list"));

export const LazyReceive = lazy(() => import("~/pages/receive"));
export const LazyReceiveHeader = lazy(() => import("~/pages/receive/header"));
export const LazyReceiveQrCode = lazy(() => import("~/pages/receive/qrcode"));
