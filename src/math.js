function trim(value) {
  if (typeof value != "string") {
    return value;
  }
  return value.replace(/^\s+|\s+$/gm, "");
}

function turnThousand(val) {
  if (!val) {
    return val === 0 || val === "0" ? 0 : "";
  }
  val = val.toString();
  if (val.split(".").length == 1) {
    return val.replace(/(\d)(?=(?:\d{3})+$)/g, "$1,");
  } else {
    return (
      val.split(".")[0].replace(/(\d)(?=(?:\d{3})+$)/g, "$&,") +
      "." +
      val.split(".")[1]
    );
  }
}

export { trim, turnThousand };
