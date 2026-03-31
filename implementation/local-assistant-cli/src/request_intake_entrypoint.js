"use strict";

const SUPPORTED_MODES = Object.freeze(["auto", "note", "task", "log", "status"]);

function isPlainObject(value) {
  return value !== null && typeof value === "object" && !Array.isArray(value);
}

function normalizeMode(mode) {
  if (typeof mode === "undefined") {
    return { valid: true, value: "auto", errors: [] };
  }

  if (typeof mode !== "string") {
    return { valid: false, value: "auto", errors: ["mode must be a string"] };
  }

  const trimmedMode = mode.trim();

  if (!SUPPORTED_MODES.includes(trimmedMode)) {
    return {
      valid: false,
      value: "auto",
      errors: [
        trimmedMode === ""
          ? "mode cannot be empty"
          : `unsupported mode: ${trimmedMode}`,
      ],
    };
  }

  return { valid: true, value: trimmedMode, errors: [] };
}

function createInvalidResult(errors, mode) {
  const safeMode = SUPPORTED_MODES.includes(mode) ? mode : "auto";
  const normalizedErrors = Array.isArray(errors)
    ? errors.filter((error) => typeof error === "string" && error.trim() !== "")
    : [];

  return {
    valid: false,
    request_text: "",
    mode: safeMode,
    errors: normalizedErrors,
  };
}

function createValidResult(requestText, mode) {
  return {
    valid: true,
    request_text: requestText,
    mode,
    errors: [],
  };
}

function requestIntakeEntrypoint(input) {
  if (!isPlainObject(input)) {
    return createInvalidResult(["input must be a plain object"], "auto");
  }

  const errors = [];
  const modeResult = normalizeMode(input.mode);

  if (!modeResult.valid) {
    errors.push(...modeResult.errors);
  }

  if (!Object.prototype.hasOwnProperty.call(input, "raw_request")) {
    errors.push("raw_request is required");
  } else if (typeof input.raw_request !== "string") {
    errors.push("raw_request must be a string");
  }

  const requestText =
    typeof input.raw_request === "string" ? input.raw_request.trim() : "";

  if (typeof input.raw_request === "string" && requestText === "") {
    errors.push("raw_request cannot be empty");
  }

  if (errors.length > 0) {
    return createInvalidResult(errors, modeResult.value);
  }

  return createValidResult(requestText, modeResult.value);
}

if (typeof module !== "undefined") {
  module.exports = {
    SUPPORTED_MODES,
    normalizeMode,
    requestIntakeEntrypoint,
  };
}
