
const  TextStyleConfig = ({
    fontSize,
    setFontSize,
    fontColor,
    isBold,
    setIsBold
})=>{
  return (
    <div className="textStyleConfig">
        <label className="configLabel">
            Font Size:
            <input type="text" 
            className="input" 
            value={fontSize} 
            onChange={(e) => setFontSize(e.target.replace(/\D/g, ''))} />
        </label>
        <label className="configLabel">
            Font Color:
            <input type="color" className="colorPicker" value={fontColor} onChange={(e) => setFontColor(e.target.value)} />
        </label>
        <label className="configLabel">
            Bold:
            <input type="checkbox" 
            value={isBold} 
            onChange={(e) => setIsBold(e.target.checked)}  />
        </label>
    </div>
  )
}

export default TextStyleConfig