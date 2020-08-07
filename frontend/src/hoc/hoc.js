import React from "react";
import Palette from "./Palette";
import Router from "./Router";
import Authorisation from "./Authorization";
import UserContextHoc from "./UserContext";
import FolderContextHoc from "./FolderContext";
import MuiPickerHoc from "./MuiPickerHoc";
import moment from "moment";
import "moment/locale/fr";

moment.locale("fr");

function Hoc() {
  return (
    <div>
      <MuiPickerHoc>
        <Authorisation>
          <Palette>
            <UserContextHoc>
              <FolderContextHoc>
                <Router />
              </FolderContextHoc>
            </UserContextHoc>
          </Palette>
        </Authorisation>
      </MuiPickerHoc>
    </div>
  );
}

export default Hoc;
