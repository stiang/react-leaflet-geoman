import "@geoman-io/leaflet-geoman-free";
import { useState, useLayoutEffect, useEffect } from "react";
import { useLeafletContext } from "react-leaflet";
function globalEvents(map, handlers, method) {
  if (handlers.onGlobalCutModeToggled) {
    map[method]("pm:globalcutmodetoggled", handlers.onGlobalCutModeToggled);
  }
  if (handlers.onGlobalDragModeToggled) {
    map[method]("pm:globaldragmodetoggled", handlers.onGlobalDragModeToggled);
  }
  if (handlers.onGlobalDrawModeToggled) {
    map[method]("pm:globaldrawmodetoggled", handlers.onGlobalDrawModeToggled);
  }
  if (handlers.onGlobalEditModeToggled) {
    map[method]("pm:globaleditmodetoggled", handlers.onGlobalEditModeToggled);
  }
  if (handlers.onButtonClick) {
    map[method]("pm:buttonclick", handlers.onButtonClick);
  }
  if (handlers.onActionClick) {
    map[method]("pm:actionclick", handlers.onActionClick);
  }
  if (handlers.onKeyEvent) {
    map[method]("pm:keyevent", handlers.onKeyEvent);
  }
  if (handlers.onLangChange) {
    map[method]("pm:langchange", handlers.onLangChange);
  }
  if (handlers.onGlobalRemovalModeToggled) {
    map[method]("pm:globalremovalmodetoggled", handlers.onGlobalRemovalModeToggled);
  }
  if (handlers.onGlobalRotateModeToggled) {
    map[method]("pm:globalrotatemodetoggled", handlers.onGlobalRotateModeToggled);
  }
}
function layerEvents(layer, handlers, method) {
  if (handlers.onVertexAdded) {
    layer[method]("pm:vertexadded", handlers.onVertexAdded);
  }
  if (handlers.onSnapDrag) {
    layer[method]("pm:snapdrag", handlers.onSnapDrag);
  }
  if (handlers.onSnap) {
    layer[method]("pm:snap", handlers.onSnap);
  }
  if (handlers.onUnsnap) {
    layer[method]("pm:unsnap", handlers.onUnsnap);
  }
  if (handlers.onCenterPlaced) {
    layer[method]("pm:centerplaced", handlers.onCenterPlaced);
  }
  if (handlers.onChange) {
    layer[method]("pm:change", handlers.onChange);
  }
  if (handlers.onEdit) {
    layer[method]("pm:edit", handlers.onEdit);
  }
  if (handlers.onUpdate) {
    layer[method]("pm:update", handlers.onUpdate);
  }
  if (handlers.onEnable) {
    layer[method]("pm:enable", handlers.onEnable);
  }
  if (handlers.onDisable) {
    layer[method]("pm:disable", handlers.onDisable);
  }
  if (handlers.onVertexRemoved) {
    layer[method]("pm:vertexremoved", handlers.onVertexRemoved);
  }
  if (handlers.onVertexClick) {
    layer[method]("pm:vertexclick", handlers.onVertexClick);
  }
  if (handlers.onMarkerDragStart) {
    layer[method]("pm:markerdragstart", handlers.onMarkerDragStart);
  }
  if (handlers.onMarkerDrag) {
    layer[method]("pm:markerdrag", handlers.onMarkerDrag);
  }
  if (handlers.onMarkerDragEnd) {
    layer[method]("pm:markerdragend", handlers.onMarkerDragEnd);
  }
  if (handlers.onLayerReset) {
    layer[method]("pm:layerreset", handlers.onLayerReset);
  }
  if (handlers.onIntersect) {
    layer[method]("pm:intersect", handlers.onIntersect);
  }
  if (handlers.onDragStart) {
    layer[method]("pm:dragstart", handlers.onDragStart);
  }
  if (handlers.onDrag) {
    layer[method]("pm:drag", handlers.onDrag);
  }
  if (handlers.onDragEnd) {
    layer[method]("pm:dragend", handlers.onDragEnd);
  }
  if (handlers.onDragEnable) {
    layer[method]("pm:dragenable", handlers.onDragEnable);
  }
  if (handlers.onDragDisable) {
    layer[method]("pm:dragdisable", handlers.onDragDisable);
  }
  if (handlers.onLayerRemove) {
    layer[method]("pm:remove", handlers.onLayerRemove);
  }
  if (handlers.onLayerCut) {
    layer[method]("pm:cut", handlers.onLayerCut);
  }
  if (handlers.onLayerRotateEnable) {
    layer[method]("pm:rotateenable", handlers.onLayerRotateEnable);
  }
  if (handlers.onLayerRotateDisable) {
    layer[method]("pm:rotatedisable", handlers.onLayerRotateDisable);
  }
  if (handlers.onLayerRotateStart) {
    layer[method]("pm:rotatestart", handlers.onLayerRotateStart);
  }
  if (handlers.onLayerRotate) {
    layer[method]("pm:rotate", handlers.onLayerRotate);
  }
  if (handlers.onLayerRotateEnd) {
    layer[method]("pm:rotateend", handlers.onLayerRotateEnd);
  }
  if (handlers.onTextChange) {
    layer[method]("pm:textchange", handlers.onTextChange);
  }
}
function mapEvents(map, handlers, method) {
  if (handlers.onMapCut) {
    map[method]("pm:cut", (e) => {
      layerEvents(e.layer, handlers, "off");
      layerEvents(e.layer, handlers, "on");
      if (handlers.onMapCut)
        handlers.onMapCut(e);
    });
  }
  if (handlers.onCreate) {
    map[method]("pm:create", (e) => {
      layerEvents(e.layer, handlers, "off");
      layerEvents(e.layer, handlers, "on");
      if (handlers.onCreate)
        handlers.onCreate(e);
    });
  }
  if (handlers.onDrawStart) {
    map[method]("pm:drawstart", handlers.onDrawStart);
  }
  if (handlers.onDrawEnd) {
    map[method]("pm:drawend", handlers.onDrawEnd);
  }
  if (handlers.onMapRemove) {
    map[method]("pm:remove", handlers.onMapRemove);
  }
  if (handlers.onMapRotateEnable) {
    map[method]("pm:rotateenable", handlers.onMapRotateEnable);
  }
  if (handlers.onMapRotateDisable) {
    map[method]("pm:rotatedisable", handlers.onMapRotateDisable);
  }
  if (handlers.onMapRotate) {
    map[method]("pm:rotate", handlers.onMapRotate);
  }
  if (handlers.onMapRotateStart) {
    map[method]("pm:rotatestart", handlers.onMapRotateStart);
  }
  if (handlers.onMapRotateEnd) {
    map[method]("pm:rotateend", handlers.onMapRotateEnd);
  }
}
const reference = [
  "onMapRemove",
  "onLayerRemove",
  "onMapCut",
  "onLayerCut",
  "onMapRotateEnable",
  "onLayerRotateEnable",
  "onMapRotateDisable",
  "onLayerRotateDisable",
  "onMapRotateStart",
  "onLayerRotateStart",
  "onMapRotate",
  "onLayerRotate",
  "onMapRotateEnd",
  "onLayerRotateEnd",
  "onGlobalDrawModeToggled",
  "onDrawStart",
  "onDrawEnd",
  "onCreate",
  "onGlobalEditModeToggled",
  "onGlobalDragModeToggled",
  "onGlobalRemovalModeToggled",
  "onGlobalCutModeToggled",
  "onGlobalRotateModeToggled",
  "onLangChange",
  "onButtonClick",
  "onActionClick",
  "onKeyEvent",
  "onSnapDrag",
  "onSnap",
  "onUnsnap",
  "onCenterPlaced",
  "onEdit",
  "onUpdate",
  "onEnable",
  "onDisable",
  "onVertexAdded",
  "onVertexRemoved",
  "onVertexClick",
  "onMarkerDragStart",
  "onMarkerDrag",
  "onMarkerDragEnd",
  "onLayerReset",
  "onIntersect",
  "onChange",
  "onTextChange",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onDragEnable",
  "onDragDisable"
];
function GeomanControls({ options = {}, globalOptions = {}, pathOptions = {}, lang = "en", eventDebugFn, onMount, onUnmount, ...handlers }) {
  const [mounted, setMounted] = useState(false);
  const [handlersRef, setHandlersRef] = useState(process.env.NODE_ENV === "development" ? handlers : {});
  const { map, layerContainer } = useLeafletContext();
  const container = layerContainer || map;
  if (!container) {
    console.warn("[GEOMAN-CONTROLS] No map or container instance found");
    return null;
  }
  useLayoutEffect(() => {
    if (!map.pm.controlsVisible()) {
      map.pm.addControls(options);
      if (onMount)
        onMount();
      setMounted(true);
    }
    return () => {
      map.pm.disableDraw();
      map.pm.disableGlobalEditMode();
      map.pm.disableGlobalRemovalMode();
      map.pm.disableGlobalDragMode();
      map.pm.disableGlobalCutMode();
      map.pm.disableGlobalRotateMode();
      map.pm.disableGlobalDragMode();
      map.pm.disableGlobalCutMode();
      if (onUnmount)
        onUnmount();
      map.pm.removeControls();
      setMounted(false);
    };
  }, []);
  useEffect(() => {
    if (mounted)
      map.pm.setPathOptions(pathOptions);
  }, [pathOptions, mounted]);
  useEffect(() => {
    if (mounted)
      map.pm.setGlobalOptions({ layerGroup: container, ...globalOptions });
  }, [globalOptions, mounted]);
  useEffect(() => {
    if (mounted)
      map.pm.setLang(lang);
  }, [lang, mounted]);
  useEffect(() => {
    if (mounted) {
      const withDebug = Object.fromEntries(reference.map((handler) => {
        var _a;
        return [handler, (_a = handlers[handler]) != null ? _a : eventDebugFn];
      }));
      const layers = layerContainer ? container.getLayers() : map.pm.getGeomanLayers();
      layers.forEach((layer) => layerEvents(layer, withDebug, "on"));
      globalEvents(map, withDebug, "on");
      mapEvents(map, withDebug, "on");
      return () => {
        globalEvents(map, withDebug, "off");
        mapEvents(map, withDebug, "off");
        layers.forEach((layer) => layerEvents(layer, withDebug, "off"));
        setHandlersRef(handlers);
      };
    }
  }, [
    mounted,
    process.env.NODE_ENV === "development" ? Object.entries(handlers).every(([k, fn]) => handlersRef[k] === fn) : true
  ]);
  return null;
}
export {
  GeomanControls,
  globalEvents,
  layerEvents,
  mapEvents,
  reference,
  GeomanControls as useGeomanControls
};
//# sourceMappingURL=index.mjs.map
