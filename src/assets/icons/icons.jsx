import { BsCursor, BsSquare, BsCircle, BsArrowsMove, BsSlashSquare, BsTriangle, BsMap, BsPen, BsTools } from "react-icons/bs";
import {
    AiOutlineSelect,
    AiOutlinePicCenter,
    AiOutlineLine,
    AiOutlineSwapRight,
    AiOutlineZoomIn,
    AiOutlineZoomOut,
    AiOutlineStock,
    AiOutlineCompass,
    AiOutlinePrinter,
    AiOutlineExport,
} from "react-icons/ai";
import { GrUndo, GrRedo } from "react-icons/gr";
import { RiRulerLine, RiGuideFill, RiGitCommitLine } from "react-icons/ri";
import { FaBuffer, FaRegHandPaper, FaStreetView } from "react-icons/fa";
import { FiEdit, FiMousePointer } from "react-icons/fi";
import { GiSightDisabled } from "react-icons/gi";
import { BiMoon, BiSun } from "react-icons/bi";
import { VscChevronDown, VscChevronUp } from "react-icons/vsc";
import { DiBingSmall } from "react-icons/di";
import { MdFilterCenterFocus } from "react-icons/md";

export const icons = {
    selection: {
        pointEtRectangle: <BsCursor size="1.2em" />,
        cercle: <BsCircle size="1.2em" />,
        polygonale: <BsSquare size="1.2em" />,
        libre: <AiOutlineSelect size="1.2em" />,
    },
    annuler: <GrUndo size="1.2em" />,
    refaire: <GrRedo size="1.2em" />,

    panoter: <FaRegHandPaper size="1.2em" />,
    zoomer: <AiOutlineZoomIn size="1.2em" />,
    dezoomer: <AiOutlineZoomOut size="1.2em" />,
    recentrer: <AiOutlinePicCenter size="1.2em" />,

    mesure: {
        distance: <RiRulerLine size="1.2em" />,
        surface: <BsSlashSquare size="1.2em" />,
        buffer: <FaBuffer size="1.2em" />,
        translater: <BsArrowsMove size="1.2em" />,
        modifier: <FiEdit size="1.2em" />,
    },

    inactive: {
        inactive: <GiSightDisabled size="1.2em" />,
        point: <FiMousePointer size="1.2em" />,
        segment: <AiOutlineLine size="1.2em" />,
        polyligne: <AiOutlineSwapRight size="1.2em" />,
    },

    dessin: {
        base: <BsPen size="1.2em" />,
        cercle: <BsCircle size="1.2em" />,
        polyligne: <AiOutlineSwapRight size="1.2em" />,
        polygone: <BsTriangle size="1.2em" />,
    },

    guide: {
        guide: <RiGuideFill size="1.2em" />,
        tangente: <AiOutlineStock size="1.2em" />,
        normale: <RiGitCommitLine size="1.2em" />,
    },

    etat: <AiOutlineCompass size="1.2em" />,

    vue: {
        streetView: <FaStreetView size="1.2em" />,
        bingMaps: <DiBingSmall size="1.2em" />,
        fondGeoserveur: <BsMap size="1.2em" />,
    },

    theme: {
        sun: <BiSun size="1.2em" />,
        moon: <BiMoon size="1.2em" />,
    },
    dropdownDown: <VscChevronDown size="1.2em" />,
    dropdownUp: <VscChevronUp size="1.2em" />,
    impression: {
        parametres: <BsTools size="1.2em" />,
        recadrer: <MdFilterCenterFocus size="1.2em" />,
        imprimer: <AiOutlinePrinter size="1.2em" />,
        exporter: <AiOutlineExport size="1.2em" />,
    },
};
