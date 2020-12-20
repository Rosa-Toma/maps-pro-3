import { BsCursor, BsSquare, BsCircle, BsArrowsMove, BsSlashSquare, BsTriangle } from "react-icons/bs";
import { AiOutlineSelect, AiOutlinePicCenter, AiOutlineLine, AiOutlineSwapRight, AiOutlineZoomIn, AiOutlineZoomOut } from "react-icons/ai";
import { GrUndo, GrRedo } from "react-icons/gr";
import { RiRulerLine, RiGuideFill } from "react-icons/ri";
import { FaBuffer, FaRegHandPaper } from "react-icons/fa";
import { FiEdit, FiMousePointer } from "react-icons/fi";
import { GiSightDisabled } from "react-icons/gi";
import { BiMoon, BiSun } from "react-icons/bi";
import { VscChevronDown } from "react-icons/vsc";

export const icons = {
    selection: {
        pointEtRectangle: <BsCursor size="1.5em" />,
        cercle: <BsCircle size="1.5em" />,
        polygonale: <BsSquare size="1.5em" />,
        libre: <AiOutlineSelect size="1.5em" />,
    },
    annuler: <GrUndo size="1.5em" />,
    refaire: <GrRedo size="1.5em" />,

    panoter: <FaRegHandPaper size="1.5em" />,
    zoomer: <AiOutlineZoomIn size="1.5em" />,
    dezoomer: <AiOutlineZoomOut size="1.5em" />,
    recentrer: <AiOutlinePicCenter size="1.5em" />,

    mesure: {
        distance: <RiRulerLine size="1.5em" />,
        surface: <BsSlashSquare size="1.5em" />,
        buffer: <FaBuffer size="1.5em" />,
        translater: <BsArrowsMove size="1.5em" />,
        modifier: <FiEdit size="1.5em" />,
    },

    inactive: {
        inactive: <GiSightDisabled size="1.5em" />,
        point: <FiMousePointer size="1.5em" />,
        segment: <AiOutlineLine size="1.5em" />,
        polyligne: <AiOutlineSwapRight size="1.5em" />,
    },

    dessin: {
        cercle: <BsCircle size="1.5em" />,
        polyligne: <AiOutlineSwapRight size="1.5em" />,
        polygone: <BsTriangle size="1.5em" />,
    },

    guide: {
        guide: <RiGuideFill size="1.5em" />,
        tangente: <BsCursor size="1.5em" />,
        normale: <BsCursor size="1.5em" />,
    },

    etat: <BsCursor size="1.5em" />,

    vue: {
        streetView: <BsCursor size="1.5em" />,
        bingMaps: <BsCursor size="1.5em" />,
        fondGeoserveur: <BsCursor size="1.5em" />,
    },

    theme: {
        sun: <BiSun size="1.5em" />,
        moon: <BiMoon size="1.5em" />,
    },
    dropdown: <VscChevronDown size="1.5em" />,
};
