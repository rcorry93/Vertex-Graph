import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material.module';
import { VertexGraphGeneratorComponent } from './components/vertex-graph/vertex-graph-generator/vertex-graph-generator.component';
import { HomeComponent } from './components/home/home/home.component';
import { NgxGraphModule } from '@swimlane/ngx-graph';
import { JsonInputComponent } from './components/vertex-graph/json-input/json-input/json-input.component';
import { VertexGraphContainerComponent } from './components/vertex-graph/vertex-graph-container/vertex-graph-container/vertex-graph-container.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    VertexGraphGeneratorComponent,
    HomeComponent,
    JsonInputComponent,
    VertexGraphContainerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    NgxGraphModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
