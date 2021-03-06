/******************************************************************************
 *
 * Copyright (c) 2020, the Regular Table Authors.
 *
 * This file is part of the Regular Table library, distributed under the terms
 * of the Apache License 2.0.  The full license can be found in the LICENSE
 * file.
 *
 */

// Singleton `WeakMap`s to store metadata for td/th elements, as well as the
// datagrids themselves for each `<perspective-viewer>`
export const METADATA_MAP = new WeakMap();

// Output runtime debug info like FPS.
export const DEBUG = true;

// Double buffer when the viewport scrolls columns, rows or when the
// view is recreated.  Reduces render draw-in on some browsers, at the
// expense of performance.
export const DOUBLE_BUFFER_COLUMN = false;
export const DOUBLE_BUFFER_ROW = false;
export const DOUBLE_BUFFER_RECREATE = false;

// The largest size virtual <div> in (px) that Chrome can support without
// glitching.
const isFirefox = navigator.userAgent.toLowerCase().indexOf("firefox") > -1;
export const BROWSER_MAX_HEIGHT = isFirefox ? 5000000 : 10000000;
