import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import SvgIcon from "@mui/material/SvgIcon";


function SVG({ className }) {
    return (
        <>
            <SvgIcon width="12" height="8" viewBox="-4 -4 20 16" className={className}>
                <path d="M1.41 0L6 4.94467L10.59 0L12 1.52227L6 8L0 1.52227L1.41 0Z" fill="#044766" fill-opacity="0.75" />
            </SvgIcon>
        </>
    );
}

function DocumentToolFilter({ label, options }) {
    return (
        <Select
            size="small"
            variant="outlined"
            sx={{ width: "100%", mr: 1, borderRadius: 0, color: "primary.75%", bgcolor: "#0547660d", '.MuiOutlinedInput-notchedOutline': { border: "none", } }}
            IconComponent={SVG}
            defaultValue={"null"}
        // onChange={(e) => console.log(e)}
        >
            <MenuItem value={"null"} sx={{ color: "gray" }}>{label}</MenuItem>
            {options?.map?.(obj => (
                <MenuItem key={obj?.option} value={obj?.option}>{obj?.value}</MenuItem>
            ))}
        </Select>
    );
}

export default DocumentToolFilter;
