// This file is part of MinSQL
// Copyright (c) 2019 MinIO, Inc.
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.
//
// You should have received a copy of the GNU Affero General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/>.

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SharedModule} from '../../shared/shared.module';

import {TokensComponent} from './tokens/tokens.component';
import {TokensRoutingModule} from './tokens-routing.module';
import {TokensListComponent} from './tokens-list/tokens-list.component';
import {TokenDetailsComponent} from './token-details/token-details.component';
import {MatCardModule, MatPaginatorModule, MatTableModule} from '@angular/material';

@NgModule({
  declarations: [
    TokensComponent,
    TokensListComponent,
    TokenDetailsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    TokensRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatCardModule,
  ]
})
export class TokensModule {
}
